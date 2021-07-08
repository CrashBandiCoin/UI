import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { fetchVaultUserDataAsync } from 'state/actions'
import { unstake } from 'utils/callHelpers'
import { useVaultchef } from 'hooks/useContract'

const useUnstakeFarms = (pid: number) => {
  const { account } = useWallet()
  const masterChefContract = useVaultchef()
  const dispatch = useDispatch()

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      dispatch(fetchVaultUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakeFarms
