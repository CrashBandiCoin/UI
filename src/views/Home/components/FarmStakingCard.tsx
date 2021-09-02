import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, Text, Flex } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { usePriceCakeBusd, usePriceMintBusd, usePriceTeaSportBusd } from '../../../state/hooks'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getCakeAddress, getMintAddress, getTeaSportAddress } from '../../../utils/addressHelpers'
import { useAllEarningsByCategory } from '../../../hooks/useAllEarnings'
import { getBalanceNumber } from '../../../utils/formatBalance'
import CardValue from './CardValue'

const StyledFarmStakingCard = styled(Card)`
`
const Block = styled.div`
  margin-bottom: 16px;
`

const HorizontalBlock = styled.div`
  display: inline-block;
  text-align: center;
  margin-right: 5%;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`


const StyledColumn = styled(Flex)<{ noMobileBorder?: boolean }>`
  flex-direction: column;
  ${({ noMobileBorder, theme }) =>
          noMobileBorder
                  ? `${theme.mediaQueries.md} {
           padding: 0 16px;
           border-left: 1px ${theme.colors.inputSecondary} solid;
         }
       `
                  : `border-left: 1px ${theme.colors.inputSecondary} solid;
         padding: 0 8px;
         ${theme.mediaQueries.sm} {
           padding: 0 16px;
         }
       `}
`

const Grid = styled.div`
  display: grid;
  grid-gap: 16px 8px;
  margin-top: 24px;
  grid-template-columns: repeat(2, auto);

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 32px;
    grid-template-columns: repeat(4, auto);
  }
`

// icon token
const burnIcon = '/images/icons/burnIcon.svg'

const FarmedStakingCard = ({
                             cakeBalance,
                             cakePrice,
                             logo,
                             label,
                             address,
                             totalSupply,
                             circSupply,
                             supply,
                             marketCap,
                             tokenPerBlock,
                             burnBalance,
                           }) => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
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
    <Grid>
      <StyledColumn>
        <Text fontSize='14px'>Your wallet</Text>
        <CakeWalletBalance cakeBalance={cakeBalance} />
        <Label>~${(cakePrice * cakeBalance).toFixed(2)}</Label>
      </StyledColumn>
      <StyledColumn>
        <Text fontSize='14px'>{TranslateString(10005, 'Market Cap')}</Text>
        <CardValue fontSize='14px' value={getBalanceNumber(marketCap)} decimals={0} prefix='$' />
      </StyledColumn>
      <StyledColumn>
        <Text fontSize='14px'>{TranslateString(536, 'Total Minted')}</Text>
        {totalSupply && <CardValue fontSize='14px' value={getBalanceNumber(totalSupply)} decimals={0} />}
      </StyledColumn>
      <StyledColumn>
        <Text fontSize='14px'>{TranslateString(538, 'Total Burned')}</Text>
        <CardValue fontSize='14px' value={getBalanceNumber(burnBalance)} decimals={0} />
      </StyledColumn>
      <StyledColumn>
        <Text fontSize='14px'>{TranslateString(10004, 'Circulating Supply')}</Text>
        {supply && <CardValue fontSize='14px' value={supply} decimals={0} />}
      </StyledColumn>
      {tokenPerBlock ?
        <StyledColumn>
          <Text fontSize='14px'>Emission rate :</Text>
          <Text bold fontSize='14px'>
            {tokenPerBlock}
          </Text>
        </StyledColumn>
        : ''}
      {!tokenPerBlock ?
        <StyledColumn>
          <Text fontSize='14px'>CAPPED (no more token)</Text>
        </StyledColumn>
        : ''}
    </Grid>
  )
}

export default FarmedStakingCard
