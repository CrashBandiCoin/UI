import { useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import multicall from 'utils/multicall'
import { getMasterChefAddress, getMasterMintAddress } from 'utils/addressHelpers'
import masterChefABI from 'config/abi/masterchef.json'
import masterMintABI from 'config/abi/mastermint.json'
import { farmsConfig } from 'config/constants'
import useRefresh from './useRefresh'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([])
  const { account }: { account: string } = useWallet()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchAllBalances = async () => {
      const farms1 = farmsConfig.filter((farm) => farm.id === 1 || farm.id === 3 || farm.id === 4 || farm.id === 6 || farm.id === 7 || farm.id === 8 || farm.id === 9)
      const farms2 = farmsConfig.filter((farm) => farm.id !== 1 && farm.id !== 3 && farm.id !== 4 && farm.id !== 6 && farm.id !== 7 && farm.id !== 8 && farm.id !== 9)
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

      const res1 = await multicall(masterMintABI, calls1)
      const res2 = await multicall(masterChefABI, calls2)

      setBalance([ ...res1, ...res2])
    }

    if (account) {
      fetchAllBalances()
    }
  }, [account, fastRefresh])

  return balances
}

export default useAllEarnings
