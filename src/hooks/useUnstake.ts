import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import {
  fetchFarmUserDataAsync,
  updateUserStakedBalance,
  updateUserBalance,
  updateUserPendingReward,
} from 'state/actions'
import { unstake, sousUnstake, sousEmegencyUnstake } from 'utils/callHelpers'
import { useMasterchef, useMastermint, useMasterteasport, useSousChef } from './useContract'

const useUnstake = (pid: number, type: string) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  
  const masterChefContract = useMasterchef()
  const masterMintContract = useMastermint()
  const masterTeaSportContract = useMasterteasport()

  let contract = null
  if (type === 'Sugar')
    contract = masterChefContract
  else if (type === 'Mint')
    contract = masterMintContract
  else
    contract = masterTeaSportContract

  const handleUnstake = useCallback(
    async (amount: string, actionType: string) => {
      const txHash = await unstake(contract, pid, amount, actionType, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, contract, pid],
  )

  return { onUnstake: handleUnstake }
}

const SYRUPIDS = [5, 6, 3, 1, 22, 23]

export const useSousUnstake = (sousId) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()
  const sousChefContract = useSousChef(sousId)
  const isOldSyrup = SYRUPIDS.includes(sousId)

  const handleUnstake = useCallback(
    async (amount: string, actionType: string) => {
      if (sousId === 0) {
        const txHash = await unstake(masterChefContract, 0, amount, actionType, account)
        console.info(txHash)
      } else if (isOldSyrup) {
        const txHash = await sousEmegencyUnstake(sousChefContract, amount, account)
        console.info(txHash)
      } else {
        const txHash = await sousUnstake(sousChefContract, amount, account)
        console.info(txHash)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
      dispatch(updateUserPendingReward(sousId, account))
    },
    [account, dispatch, isOldSyrup, masterChefContract, sousChefContract, sousId],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
