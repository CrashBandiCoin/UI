import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchVaultUserDataAsync } from 'state/actions'
import { harvestVault } from 'utils/callHelpers'
import { useVaultchef } from 'hooks/useContract'

const useHarvestFarm = (farmPid: number) => {
  const masterChefContract = useVaultchef()
  const dispatch = useDispatch()
  const { account } = useWallet()

  const handleHarvest = useCallback(async () => {
    const txHash = await harvestVault(masterChefContract, farmPid, account)
    dispatch(fetchVaultUserDataAsync(account))
  }, [farmPid, masterChefContract, dispatch, account])

  return { onReward: handleHarvest }
}

export default useHarvestFarm
