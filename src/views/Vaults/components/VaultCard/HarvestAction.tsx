import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading } from '@pancakeswap-libs/uikit'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync } from 'state/farms'
import { getBalanceAmount } from 'utils/formatBalance'
import { BIG_ZERO } from 'utils/bigNumber'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { usePriceCakeBusd } from 'state/hooks'
import Balance from 'components/Balance'
import useHarvestFarm from '../../hooks/useHarvestFarm'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
}

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pid }) => {
  const { account } = useWallet()
  
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvestFarm(pid)
  const cakePrice = usePriceCakeBusd()
  const dispatch = useDispatch()
  const rawEarningsBalance = account ? getBalanceAmount(earnings) : BIG_ZERO
  const displayBalance = rawEarningsBalance.toFixed(3, BigNumber.ROUND_DOWN)
  const earningsBusd = rawEarningsBalance ? rawEarningsBalance.multipliedBy(cakePrice).toNumber() : 0

  return (
    <Flex mb="8px" justifyContent="space-between" alignItems="center">
      <Flex flexDirection="column" alignItems="flex-start">
        <Heading color={rawEarningsBalance.eq(0) ? 'textDisabled' : 'text'}>{displayBalance}</Heading>
        {earningsBusd > 0 && (
          <Balance fontSize="12px" color="textSubtle" decimals={2} value={earningsBusd} unit=" USD" prefix="~" />
        )}
      </Flex>
      <Button
        disabled={rawEarningsBalance.eq(0) || pendingTx}
        onClick={async () => {
          setPendingTx(true)
          try {
            await onReward()
            console.log('Your CAKE earnings have been sent to your wallet!')
          } catch (e) {
            console.log('Please try again and confirm the transaction.')
            console.error(e)
          } finally {
            setPendingTx(false)
          }
        }}
      >
        Harvest
      </Button>
    </Flex>
  )
}

export default HarvestAction
