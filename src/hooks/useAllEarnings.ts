import { useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import multicall from 'utils/multicall'
import {getMasterChefAddress, getMasterMintAddress, getMasterTeaSportAddress} from 'utils/addressHelpers'
import masterChefABI from 'config/abi/masterchef.json'
import masterMintABI from 'config/abi/mastermint.json'
import masterTeaSportABI from 'config/abi/masterteasport.json'
import { farmsConfig } from 'config/constants'
import useRefresh from './useRefresh'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([])
  const { account }: { account: string } = useWallet()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchAllBalances = async () => {
      const farms1 = farmsConfig.filter((farm) => farm.type === 'Mint')
      const farms2 = farmsConfig.filter((farm) => farm.type === 'Sugar')
      const farms3 = farmsConfig.filter((farm) => farm.type === 'TeaSport')
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
      const calls3 = farms3.map((farm) => {
        return {
          address:getMasterTeaSportAddress(),
          name: 'pendingTeaSport',
          params: [farm.pid, account]
        }
      })

      const res1 = await multicall(masterMintABI, calls1)
      const res2 = await multicall(masterChefABI, calls2)
      const res3 = await multicall(masterTeaSportABI, calls3)
      const res = [ ...res1, ...res2, ...res3]
      setBalance(res)
    }

    if (account) {
      fetchAllBalances()
    }
  }, [account, fastRefresh])

  return balances
}

export default useAllEarnings
