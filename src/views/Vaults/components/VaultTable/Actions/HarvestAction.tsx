import React, { useState } from 'react'
import { Button, Skeleton, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import Balance from 'components/Balance'
import { BIG_ZERO } from 'utils/bigNumber'
import { getBalanceAmount } from 'utils/formatBalance'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync } from 'state/farms'
import { usePriceCakeBusd, useVaultUser } from 'state/hooks'
import useHarvestFarm from '../../../hooks/useHarvestFarm'

import { ActionContainer, ActionTitles, ActionContent, Earned } from './styles'

interface HarvestActionProps extends FarmWithStakedValue {
  userDataReady: boolean
}

const HarvestAction: React.FunctionComponent<HarvestActionProps> = ({ pid, id, userDataReady, lpSymbol }) => {
  const userData = useVaultUser(pid, id)
  const earningsBigNumber = new BigNumber(userData && userData.earnings ? userData.earnings.minus(userData.stakedBalance) : 0)
  const cakePrice = usePriceCakeBusd()
  let earnings = BIG_ZERO
  let earningsBusd = 0
  let displayBalance = userDataReady ? earnings.toLocaleString() : <Skeleton width={60} />

  // If user didn't connect wallet default balance will be 0
  if (!earningsBigNumber.isZero()) {
    earnings = getBalanceAmount(earningsBigNumber)
    earningsBusd = earnings.multipliedBy(cakePrice).toNumber()
    displayBalance = earnings.toFixed(10, BigNumber.ROUND_DOWN)
  }

  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvestFarm(pid)
  const dispatch = useDispatch()
  const { account } = useWallet()

  return (
    <ActionContainer>
      <ActionTitles>
        <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="4px">
          {lpSymbol}
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          Earned
        </Text>
      </ActionTitles>
      <ActionContent>
        <div>
          <Earned>{displayBalance}</Earned>
          {earningsBusd > 0 && (
            <Balance fontSize="12px" color="textSubtle" decimals={2} value={earningsBusd} unit=" USD" prefix="~" />
          )}
        </div>
        <Button
          disabled={earnings.eq(0) || pendingTx || !userDataReady}
          onClick={async () => {
            setPendingTx(true)
            try {
              await onReward()
              console.log('Your CAKE earnings have been sent to your wallet!')
            } catch (e) {
              console.log('Please try again and confirm the transaction.')
            } finally {
              setPendingTx(false)
            }
          }}
          ml="4px"
        >
          Harvest
        </Button>
      </ActionContent>
    </ActionContainer>
  )
}

export default HarvestAction
