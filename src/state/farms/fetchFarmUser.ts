import BigNumber from 'bignumber.js'
import erc20ABI from 'config/abi/erc20.json'
import masterchefABI from 'config/abi/masterchef.json'
import masterMintABI from 'config/abi/mastermint.json'
import multicall from 'utils/multicall'
import farmsConfig from 'config/constants/farms'
import { getMasterChefAddress, getMasterMintAddress } from 'utils/addressHelpers'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

export const fetchFarmUserAllowances = async (account: string) => {
  const masterChefAdress = getMasterChefAddress()
  const masterMintAddress = getMasterMintAddress()

  const farms1 = farmsConfig.filter((farm) => farm.type === 'Mint')
  const farms2 = farmsConfig.filter((farm) => farm.type === 'Sugar')

  const calls1 = farms1.map((farm) => {
    const lpContractAddress = farm.isTokenOnly ? farm.tokenAddresses[CHAIN_ID] : farm.lpAddresses[CHAIN_ID]
    return {
      address:lpContractAddress,
      name: 'allowance',
      params: [account, masterMintAddress]
    }
  })
  const calls2 = farms2.map((farm) => {
    const lpContractAddress = farm.isTokenOnly ? farm.tokenAddresses[CHAIN_ID] : farm.lpAddresses[CHAIN_ID]
    return {
      address:lpContractAddress,
      name: 'allowance',
      params: [account, masterChefAdress]
    }
  })

  const rawLpAllowances1 = await multicall(erc20ABI, calls1)
  const parsedLpAllowances1 = rawLpAllowances1.map((lpBalance) => {
    return new BigNumber(lpBalance).toJSON()
  })
  const rawLpAllowances2 = await multicall(erc20ABI, calls2)
  const parsedLpAllowances2 = rawLpAllowances2.map((lpBalance) => {
    return new BigNumber(lpBalance).toJSON()
  })
  const parsedLpAllowances = [...parsedLpAllowances1, ...parsedLpAllowances2]
  return parsedLpAllowances
}

export const fetchFarmUserTokenBalances = async (account: string) => {
  const farms1 = farmsConfig.filter((farm) => farm.type === 'Mint')
  const farms2 = farmsConfig.filter((farm) => farm.type === 'Sugar')

  const calls1 = farms1.map((farm) => {
    const lpContractAddress = farm.isTokenOnly ? farm.tokenAddresses[CHAIN_ID] : farm.lpAddresses[CHAIN_ID]
    return {
      address: lpContractAddress,
      name: 'balanceOf',
      params: [account],
    }
  })
  const calls2 = farms2.map((farm) => {
    const lpContractAddress = farm.isTokenOnly ? farm.tokenAddresses[CHAIN_ID] : farm.lpAddresses[CHAIN_ID]
    return {
      address: lpContractAddress,
      name: 'balanceOf',
      params: [account],
    }
  })

  const rawTokenBalances1 = await multicall(erc20ABI, calls1)
  const parsedTokenBalances1 = rawTokenBalances1.map((tokenBalance) => {
    return new BigNumber(tokenBalance).toJSON()
  })
  const rawTokenBalances2 = await multicall(erc20ABI, calls2)
  const parsedTokenBalances2 = rawTokenBalances2.map((tokenBalance) => {
    return new BigNumber(tokenBalance).toJSON()
  })
  const parsedTokenBalances = [...parsedTokenBalances1, ...parsedTokenBalances2]
  return parsedTokenBalances
}

export const fetchFarmUserStakedBalances = async (account: string) => {
  const masterChefAdress = getMasterChefAddress()
  const masterMintAddress = getMasterMintAddress()

  const farms1 = farmsConfig.filter((farm) => farm.type === 'Mint')
  const farms2 = farmsConfig.filter((farm) => farm.type === 'Sugar')
  const calls1 = farms1.map((farm) => {
    return {
      address:masterMintAddress,
      name: 'userInfo',
      params: [farm.pid, account]
    }
  })
  const calls2 = farms2.map((farm) => {
    return {
      address:masterChefAdress,
      name: 'userInfo',
      params: [farm.pid, account]
    }
  })

  const rawStakedBalances1 = await multicall(masterMintABI, calls1)
  const parsedStakedBalances1 = rawStakedBalances1.map((stakedBalance) => {
    return new BigNumber(stakedBalance[0]._hex).toJSON()
  })
  const rawStakedBalances2 = await multicall(masterchefABI, calls2)
  const parsedStakedBalances2 = rawStakedBalances2.map((stakedBalance) => {
    return new BigNumber(stakedBalance[0]._hex).toJSON()
  })

  const parsedStakedBalances = [...parsedStakedBalances1, ...parsedStakedBalances2]
  return parsedStakedBalances
}

export const fetchFarmUserEarnings = async (account: string) => {
  const masterChefAdress = getMasterChefAddress()
  const masterMintAddress = getMasterMintAddress()

  const farms1 = farmsConfig.filter((farm) => farm.type === 'Mint')
  const farms2 = farmsConfig.filter((farm) => farm.type === 'Sugar')
  const calls1 = farms1.map((farm) => {
    return {
      address:masterMintAddress,
      name: 'pendingMint',
      params: [farm.pid, account]
    }
  })
  const calls2 = farms2.map((farm) => {
    return {
      address:masterChefAdress,
      name: 'pendingSugar',
      params: [farm.pid, account]
    }
  })

  const rawEarnings1 = await multicall(masterMintABI, calls1)
  const parsedEarnings1 = rawEarnings1.map((earnings) => {
    return new BigNumber(earnings).toJSON()
  })
  const rawEarnings2 = await multicall(masterchefABI, calls2)
  const parsedEarnings2 = rawEarnings2.map((earnings) => {
    return new BigNumber(earnings).toJSON()
  })

  const parsedEarnings = [...parsedEarnings1, ...parsedEarnings2]
  return parsedEarnings
}
