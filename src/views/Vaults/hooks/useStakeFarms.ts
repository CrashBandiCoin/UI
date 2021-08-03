import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { fetchVaultUserDataAsync } from 'state/actions'
import { stake } from 'utils/callHelpers'
import { useVaultchef } from 'hooks/useContract'

const useStakeFarms = (pid: number) => {
  const masterChefContract = useVaultchef()
  const dispatch = useDispatch()
  const { account } = useWallet()
  
  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(masterChefContract, pid, amount, account)
      dispatch(fetchVaultUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onStake: handleStake }
}

export default useStakeFarms
