import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Contract } from 'web3-eth-contract'
import { useDispatch } from 'react-redux'
import { useMatchdaychef } from 'hooks/useContract'
import { fetchMatchdayUserDataAsync } from 'state/actions'
import { approve } from 'utils/callHelpers'

const useApproveFarm = (lpContract: Contract) => {
  const dispatch = useDispatch()
  const masterChefContract = useMatchdaychef()
  const { account }: { account: string } = useWallet()

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, masterChefContract, account)
      const receipt = await tx.wait()
      dispatch(fetchMatchdayUserDataAsync(account))
      return receipt.status
    } catch (e) {
      return false
    }
  }, [lpContract, masterChefContract, dispatch, account])

  return { onApprove: handleApprove }
}

export default useApproveFarm
