import BigNumber from 'bignumber.js'
import erc20ABI from 'config/abi/erc20.json'
import vaultchefABI from 'config/abi/vaultChef.json'
import vaultmintABI from 'config/abi/mastermint.json'
import vaultTeaSportABI from 'config/abi/masterteasport.json'
import multicall from 'utils/multicall'
import farmsConfig from 'config/constants/vaults'
import {getVaultChefAddress, getVaultMintAddress, getVaultTeaSportAddress} from 'utils/addressHelpers'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

export const fetchVaultUserAllowances = async (account: string) => {
  const vaultChefAdress = getVaultChefAddress()
  const vaultMintAddress = getVaultMintAddress()
  const vaultTeaSportAddress = getVaultTeaSportAddress()

  const farms1 = farmsConfig.filter((farm) => farm.type === 'Mint')
  const farms2 = farmsConfig.filter((farm) => farm.type === 'Sugar')
  const farms3 = farmsConfig.filter((farm) => farm.type === 'TeaSport')

  const calls1 = farms1.map((farm) => {
    const lpContractAddress = farm.isTokenOnly ? farm.token.address[CHAIN_ID] : farm.lpAddresses[CHAIN_ID]
    return {
      address:lpContractAddress,
      name: 'allowance',
      params: [account, vaultMintAddress]
    }
  })
  const calls2 = farms2.map((farm) => {
    const lpContractAddress = farm.isTokenOnly ? farm.token.address[CHAIN_ID] : farm.lpAddresses[CHAIN_ID]
    return {
      address:lpContractAddress,
      name: 'allowance',
      params: [account, vaultChefAdress]
    }
  })
  // const calls3 = farms3.map((farm) => {
  //   const lpContractAddress = farm.isTokenOnly ? farm.token.address[CHAIN_ID] : farm.lpAddresses[CHAIN_ID]
  //   return {
  //     address:lpContractAddress,
  //     name: 'allowance',
  //     params: [account, vaultTeaSportAddress]
  //   }
  // })

  const rawLpAllowances1 = await multicall(erc20ABI, calls1)
  const parsedLpAllowances1 = rawLpAllowances1.map((lpBalance) => {
    return new BigNumber(lpBalance).toJSON()
  })

  const rawLpAllowances2 = await multicall(erc20ABI, calls2)
  const parsedLpAllowances2 = rawLpAllowances2.map((lpBalance) => {
    return new BigNumber(lpBalance).toJSON()
  })

  // const rawLpAllowances3 = await multicall(erc20ABI, calls3)
  // const parsedLpAllowances3 = rawLpAllowances3.map((lpBalance) => {
  //   return new BigNumber(lpBalance).toJSON()
  // })
  // const parsedLpAllowances = [...parsedLpAllowances1, ...parsedLpAllowances2, ...parsedLpAllowances3]
  const parsedLpAllowances = [...parsedLpAllowances1, ...parsedLpAllowances2]
  return parsedLpAllowances
}

export const fetchVaultUserTokenBalances = async (account: string) => {
  const farms1 = farmsConfig.filter((farm) => farm.type === 'Mint')
  const farms2 = farmsConfig.filter((farm) => farm.type === 'Sugar')
  const farms3 = farmsConfig.filter((farm) => farm.type === 'TeaSport')

  const calls1 = farms1.map((farm) => {
    const lpContractAddress = farm.isTokenOnly ? farm.token.address[CHAIN_ID] : farm.lpAddresses[CHAIN_ID]
    return {
      address: lpContractAddress,
      name: 'balanceOf',
      params: [account],
    }
  })
  const calls2 = farms2.map((farm) => {
    const lpContractAddress = farm.isTokenOnly ? farm.token.address[CHAIN_ID] : farm.lpAddresses[CHAIN_ID]
    return {
      address: lpContractAddress,
      name: 'balanceOf',
      params: [account],
    }
  })
  // const calls3 = farms3.map((farm) => {
  //   const lpContractAddress = farm.isTokenOnly ? farm.token.address[CHAIN_ID] : farm.lpAddresses[CHAIN_ID]
  //   return {
  //     address: lpContractAddress,
  //     name: 'balanceOf',
  //     params: [account],
  //   }
  // })

  const rawTokenBalances1 = await multicall(erc20ABI, calls1)
  const parsedTokenBalances1 = rawTokenBalances1.map((tokenBalance) => {
    return new BigNumber(tokenBalance).toJSON()
  })
  const rawTokenBalances2 = await multicall(erc20ABI, calls2)
  const parsedTokenBalances2 = rawTokenBalances2.map((tokenBalance) => {
    return new BigNumber(tokenBalance).toJSON()
  })
  // const rawTokenBalances3 = await multicall(erc20ABI, calls3)
  // const parsedTokenBalances3 = rawTokenBalances3.map((tokenBalance) => {
  //   return new BigNumber(tokenBalance).toJSON()
  // })
  // const parsedTokenBalances = [...parsedTokenBalances1, ...parsedTokenBalances2, ...parsedTokenBalances3]
  const parsedTokenBalances = [...parsedTokenBalances1, ...parsedTokenBalances2]
  return parsedTokenBalances
}

export const fetchVaultUserStakedBalances = async (account: string) => {
  const vaultChefAdress = getVaultChefAddress()
  const vaultMintAddress = getVaultMintAddress()
  const vaultTeaSportAddress = getVaultTeaSportAddress()

  const farms1 = farmsConfig.filter((farm) => farm.type === 'Mint')
  const farms2 = farmsConfig.filter((farm) => farm.type === 'Sugar')
  const farms3 = farmsConfig.filter((farm) => farm.type === 'TeaSport')

  const calls1 = farms1.map((farm) => {
    return {
      address:vaultMintAddress,
      name: 'userInfo',
      params: [farm.pid, account]
    }
  })
  const calls2 = farms2.map((farm) => {
    return {
      address:vaultChefAdress,
      name: 'stakedWantTokens',
      params: [farm.pid, account]
    }
  })
  const calls3 = farms3.map((farm) => {
    return {
      address:vaultTeaSportAddress,
      name: 'userInfo',
      params: [farm.pid, account]
    }
  })

  const rawStakedBalances1 = await multicall(vaultmintABI, calls1)
  const parsedStakedBalances1 = rawStakedBalances1.map((stakedBalance) => {
    return new BigNumber(stakedBalance[0]._hex).toJSON()
  })
  const rawStakedBalances2 = await multicall(vaultchefABI, calls2)
  const parsedStakedBalances2 = rawStakedBalances2.map((stakedBalance) => {
    return new BigNumber(stakedBalance[0]._hex).toJSON()
  })
  // const rawStakedBalances3 = await multicall(vaultTeaSportABI, calls3)
  // const parsedStakedBalances3 = rawStakedBalances3.map((stakedBalance) => {
  //   return new BigNumber(stakedBalance[0]._hex).toJSON()
  // })
  // const parsedStakedBalances = [...parsedStakedBalances1, ...parsedStakedBalances2, ...parsedStakedBalances3]
  const parsedStakedBalances = [...parsedStakedBalances1, ...parsedStakedBalances2]
  return parsedStakedBalances
}

export const fetchVaultUserEarnings = async (account: string) => {
  const vaultChefAdress = getVaultChefAddress()
  const vaultMintAddress = getVaultMintAddress()
  const vaultTeaSportAddress = getVaultTeaSportAddress()

  const farms1 = farmsConfig.filter((farm) => farm.type === 'Mint')
  const farms2 = farmsConfig.filter((farm) => farm.type === 'Sugar')
  const farms3 = farmsConfig.filter((farm) => farm.type === 'TeaSport')

  const calls1 = farms1.map((farm) => {
    return {
      address:vaultMintAddress,
      name: 'pendingMint',
      params: [farm.pid, account]
    }
  })
  const calls2 = farms2.map((farm) => {
    return {
      address:vaultChefAdress,
      name: 'stakedWantTokens',
      params: [farm.pid, account]
    }
  })
  const calls3 = farms3.map((farm) => {
    return {
      address:vaultTeaSportAddress,
      name: 'pendingTeaSport',
      params: [farm.pid, account]
    }
  })

  const rawEarnings1 = await multicall(vaultmintABI, calls1)
  const parsedEarnings1 = rawEarnings1.map((earnings) => {
    return new BigNumber(earnings).toJSON()
  })
  const rawEarnings2 = await multicall(vaultchefABI, calls2)
  const parsedEarnings2 = rawEarnings2.map((earnings) => {
    return new BigNumber(earnings).toJSON()
  })
  // const rawEarnings3 = await multicall(vaultTeaSportABI, calls3)
  // const parsedEarnings3 = rawEarnings3.map((earnings) => {
  //   return new BigNumber(earnings).toJSON()
  // })

  // const parsedEarnings = [...parsedEarnings1, ...parsedEarnings2, ...parsedEarnings3]
  const parsedEarnings = [...parsedEarnings1, ...parsedEarnings2]
  return parsedEarnings
}
