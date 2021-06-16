import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import multicall from 'utils/multicall'
import { getMasterChefAddress, getMasterMintAddress } from 'utils/addressHelpers'
import masterChefABI from 'config/abi/masterchef.json'
import masterMintABI from 'config/abi/mastermint.json'
import { farmsConfig } from 'config/constants'
import { FarmConfig } from 'config/constants/types'
import useRefresh from './useRefresh'

export interface FarmWithBalance extends FarmConfig {
  balance: BigNumber
}

const useFarmsWithBalance = () => {
  const [farmsWithBalances, setFarmsWithBalances] = useState<FarmWithBalance[]>([])
  const { account } = useWallet()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalances = async () => {
      const farms1 = farmsConfig.filter((farm) => farm.type === 'Mint')
      const farms2 = farmsConfig.filter((farm) => farm.type === 'Sugar')
      const calls1 = farms1.map((farm) => {
        return {
          address:getMasterMintAddress(),
          name: 'pendingMint',
          params: [farm.pid, account]
        }
      })
      const calls2 = farms2.map((farm) => {
        return {
          address:getMasterChefAddress(),
          name: 'pendingSugar',
          params: [farm.pid, account]
        }
      })

      const rawResults1 = await multicall(masterMintABI, calls1)
      const rawResults2 = await multicall(masterChefABI, calls2)
      const rawResults = [...rawResults1, ...rawResults2]
      const results = farmsConfig.map((farm, index) => ({ ...farm, balance: new BigNumber(rawResults[index]) }))

      setFarmsWithBalances(results)
    }

    if (account) {
      fetchBalances()
    }
  }, [account, fastRefresh])

  return farmsWithBalances
}

export default useFarmsWithBalance
