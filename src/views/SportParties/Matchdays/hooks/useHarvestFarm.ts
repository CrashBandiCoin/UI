import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchMatchdayUserDataAsync } from 'state/actions'
import { harvest } from 'utils/callHelpers'
import { useMatchdaychef } from 'hooks/useContract'

const useHarvestFarm = (farmPid: number) => {
  const masterChefContract = useMatchdaychef()
  const dispatch = useDispatch()
  const { account } = useWallet()

  const handleHarvest = useCallback(async () => {
    const txHash = await harvest(masterChefContract, farmPid, account)
    dispatch(fetchMatchdayUserDataAsync(account))
  }, [farmPid, masterChefContract, dispatch, account])

  return { onReward: handleHarvest }
}

export default useHarvestFarm
