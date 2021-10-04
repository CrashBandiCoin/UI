import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, Text, Flex, Image } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { usePriceCakeBusd, usePriceMintBusd, usePriceTeaSportBusd } from '../../../state/hooks'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getCakeAddress, getMintAddress, getTeaSportAddress } from '../../../utils/addressHelpers'
import { useAllEarningsByCategory } from '../../../hooks/useAllEarnings'
import { getBalanceNumber } from '../../../utils/formatBalance'
import CardValue from './CardValue'

const StyledFarmStakingCard = styled(Card)`
  min-height: 376px;
`

const HeadingCard = styled(Heading)`
  text-align: center;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
  align-items: center;
  width: 100%;
  align-items: center;
  justify-content: center;
`
// icon token
const burnIcon = '/images/icons/burnIcon.svg'

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const cakeBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
  const eggPrice = usePriceCakeBusd().toNumber()
  const allEarningsSugar = useAllEarningsByCategory('Sugar')

  const earningsSumSugar = allEarningsSugar.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)

  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))
  // const { onRewardCompound } = useAllCompound(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      console.log(error)
    } finally {
      setPendingTx(false)
    }
  }, [onReward])


  const addWatchToken = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const provider = window.ethereum
    if (provider) {
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await provider.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: '{address}',
              symbol: '{label}',
              decimals: '18',
              image:
                '',
            },
          },
        })

        if (wasAdded) {
          console.log('Token was added')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  return (
    <>
    <Wrapper mb="12px">
      <Image src="/images/egg/2.png" alt="sugar logo" width={80} height={64} />
      <Heading mb="4px" style={{fontSize:'33px'}} color="backgroundAlt">SUGAR to Harvest</Heading>
    </Wrapper>
    <Wrapper mb="12px">
      <Text color="backgroundAlt" fontSize='30px' >{earningsSumSugar.toFixed(2)} (~${(eggPrice * earningsSumSugar).toFixed(2)})</Text>
    </Wrapper>
    <Wrapper justifyContent='center' flexDirection="column" >
      {account ? (
        <Button
          id="harvest-all"
          disabled={balancesWithValue.length <= 0 || pendingTx}
          onClick={harvestAllFarms}

        >
          {pendingTx ? 'Collecting SUGAR' : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
        </Button>
      ) : (
        <UnlockButton />
      )}
    </Wrapper>

    </>
  )
}

export default FarmedStakingCard
