import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { fetchMatchdayUserDataAsync } from 'state/actions'
import { stake } from 'utils/callHelpers'
import { useMatchdaychef } from 'hooks/useContract'

const useStakeMatchdays = (pid: number) => {
  const masterChefContract = useMatchdaychef()
  const dispatch = useDispatch()
  const { account } = useWallet()
  
  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(masterChefContract, pid, amount, account)
      dispatch(fetchMatchdayUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onStake: handleStake }
}

export default useStakeMatchdays
