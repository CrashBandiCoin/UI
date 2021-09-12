import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { fetchMatchdayUserDataAsync } from 'state/actions'
import { unstake } from 'utils/callHelpers'
import { useMatchdaychef } from 'hooks/useContract'

const useUnstakeMatchdays = (pid: number) => {
  const { account } = useWallet()
  const masterChefContract = useMatchdaychef()
  const dispatch = useDispatch()

  const handleUnstake = useCallback(
    async (amount: string, actionType: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, actionType, account)
      dispatch(fetchMatchdayUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakeMatchdays
