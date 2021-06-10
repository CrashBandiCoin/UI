import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync } from 'state/actions'
import { exchangeMint } from 'utils/callHelpers'
import { useMint } from './useContract'

const useExchangeMint = () => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const mintv2Contract = useMint()

  const handleExchange = useCallback(
    async (amount: string) => {
      const txHash = await exchangeMint(mintv2Contract, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, mintv2Contract],
  )

  return { onExchange: handleExchange }
}
export default useExchangeMint
