import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, Text } from '@pancakeswap-libs/uikit'
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
  background-image: url('/images/SUGAR/2a.png');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
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

// icon token
const burnIcon = "/images/icons/burnIcon.svg"

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
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size='xl' mb='24px'>
          {label}
        </Heading>
        <CardImage src={logo} alt='cake logo' width={64} height={64} />
        <Block>
          <Label>{label} in Wallet</Label>
          <CakeWalletBalance cakeBalance={cakeBalance} />
          <Label>~${(cakePrice * cakeBalance).toFixed(2)}</Label>
        </Block>
        <Block>
          <Button onClick={addWatchToken}  mb='sm'>
            +{' '}
            <img
              style={{ marginLeft: 8 }}
              width={16}
              src='https://raw.githubusercontent.com/blzd-dev/blzd-frontend/master/public/images/wallet/metamask.png'
              alt='metamask logo'
            />
          </Button>
        </Block>
        <br/>
        <Block>
          <HorizontalBlock>
            <CardImage src={burnIcon} alt='cake logo' width={30} height={30} />
            <Text fontSize='14px'>{TranslateString(10005, 'Market Cap')}</Text>
            <CardValue fontSize='14px' value={getBalanceNumber(marketCap)} decimals={0} prefix='$' />
          </HorizontalBlock>

          <HorizontalBlock>
            <CardImage src={burnIcon} alt='cake logo' width={30} height={30} />
            <Text fontSize='14px'>{TranslateString(536, 'Total Minted')}</Text>
            {totalSupply && <CardValue fontSize='14px' value={getBalanceNumber(totalSupply)} decimals={0} />}
          </HorizontalBlock>

          <HorizontalBlock>
            <CardImage src={burnIcon} alt='cake logo' width={30} height={30} />
            <Text fontSize="14px">{TranslateString(538, 'Total Burned')}</Text>
            <CardValue fontSize="14px" value={getBalanceNumber(burnBalance)} decimals={0} />
          </HorizontalBlock>

          <HorizontalBlock>
            <CardImage src={burnIcon} alt='cake logo' width={30} height={30} />
            <Text fontSize="14px">{TranslateString(10004, 'Circulating Supply')}</Text>
            {supply && <CardValue fontSize="14px" value={supply} decimals={0} />}
          </HorizontalBlock>
          {tokenPerBlock ?
          <HorizontalBlock>
            <CardImage src={burnIcon} alt='cake logo' width={30} height={30} />
              <Text fontSize="14px">Emission rate :</Text>
              <Text bold fontSize="14px">
                {tokenPerBlock}
              </Text>
          </HorizontalBlock>
          : ''}

        </Block>


      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
