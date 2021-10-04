import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Tag, Flex, Heading, Image, Text, Button, useWalletModal } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import Divider from './Divider'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { usePriceCakeBusd, usePriceMintBusd, usePriceTeaSportBusd } from '../../../state/hooks'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getCakeAddress, getMintAddress, getTeaSportAddress } from '../../../utils/addressHelpers'
import { useAllEarningsByCategory } from '../../../hooks/useAllEarnings'
import { getBalanceNumber } from '../../../utils/formatBalance'
import CardValue from './CardValue'


const CardBodyToken = styled.div`
  align-self: baseline;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 32px;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  padding: 24px;
  position: relative;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 60px;
  @media screen and (max-width:968px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
  align-items: center;
`

// const SpanText = styled.span`
//   background: ${({ theme }) => theme.colors.background};
//
// `

const CardTokenHome = ({
                            headingText,
                            bodyText,
                            reverse,
                            primaryButton,
                            secondaryButton,
                            images,
                            className,
                            cakeBalance,
                            cakePrice,
                            logo,
                            label,
                            colorHead,
                            address,
                            totalSupply,
                            circSupply,
                            supply,
                            marketCap,
                            tokenPerBlock,
                            burnBalance
                           }) => {
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const { account, connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)
  const farmsWithBalance = useFarmsWithBalance()
  const allEarningsSugar = useAllEarningsByCategory('Sugar')

  const earningsSumSugar = allEarningsSugar.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)

  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

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
    <CardBodyToken>
      <Wrapper mb="12px">
        <Image src={logo} alt={label} width={80} height={64} />
        <Flex flexDirection="column" >
          <Heading mb="4px" style={{fontSize:'33px', color:colorHead}}>{label}</Heading>
          <Text fontSize="18px">{headingText}</Text>
        </Flex>
      </Wrapper>
      <Wrapper mb="12px" style={{minHeight: '100px'}}>
        <Text fontSize="15px">{bodyText}</Text>
      </Wrapper>
      <Divider style={{marginBottom:'12px'}} />
      <Flex flexDirection='column'>
        <Text bold fontSize="20px">Your Wallet</Text>
        <Flex justifyContent='space-between'>
          { account
            ?
              <Text fontSize="25px" color="link">{cakeBalance.toFixed(2)} <span style={{fontSize:"17px"}}>(~${(cakePrice * cakeBalance).toFixed(2)})</span></Text>
            :
              <Button scale="sm" as="a" width="30%" variant="primary" onClick={onPresentConnectModal}>
                Connect
              </Button>
          }
        </Flex>
      </Flex>
      <Divider style={{marginBottom:'12px',marginTop:'12px'}} />
      <Flex justifyContent='space-between'>
        <Text>{TranslateString(10005, 'Market Cap')}:</Text>
        <CardValue fontSize='14px' value={getBalanceNumber(marketCap)} decimals={0} prefix='$' />
      </Flex>
      <Flex justifyContent='space-between'>
        <Text>{TranslateString(536, 'Total Minted')}:</Text>
        {totalSupply && <CardValue fontSize='14px' value={getBalanceNumber(totalSupply)} decimals={0} />}
      </Flex>
      <Flex justifyContent='space-between'>
        <Text>{TranslateString(538, 'Total Burned')}:</Text>
        <CardValue fontSize='14px' value={getBalanceNumber(burnBalance)} decimals={0} />
      </Flex>
      <Flex justifyContent='space-between'>
        <Text>{TranslateString(10004, 'Circulating Supply')}:</Text>
        {supply && <CardValue fontSize='14px' value={supply} decimals={0} />}
      </Flex>
      <Flex justifyContent='space-between'>
        <Text>Emission rate:</Text>

        { tokenPerBlock
          ?
            <CardValue fontSize='14px' value={tokenPerBlock} decimals={1} />
          :
            <Text bold fontSize='14px'>CAPPED</Text>
        }
      </Flex>
      <Divider style={{marginBottom:'12px',marginTop:'12px'}} />

      <Button as="a" href={primaryButton.to} mt="8px" width="100%" variant="primary">
        BUY
      </Button>
      <Button as="a" href={secondaryButton.to} mt="8px" width="100%" variant="secondary" style={{ background: "transparent" }}>
        LEARN
      </Button>
    </CardBodyToken>

  )
}

export default CardTokenHome
