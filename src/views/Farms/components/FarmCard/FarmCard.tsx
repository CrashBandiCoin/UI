import React, { useMemo, useState } from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import { Flex, Text, Skeleton } from '@pancakeswap-libs/uikit'
import { communityFarms } from 'config/constants'
import { Farm } from 'state/types'
import { provider } from 'web3-core'
import useI18n from 'hooks/useI18n'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { QuoteToken } from 'config/constants/types'
import DetailsSection from './DetailsSection'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
import ApyButton from './ApyButton'
import { useFarmFromPid, useFarmUser } from '../../../../state/hooks'
import { getBalanceNumber } from '../../../../utils/formatBalance'

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

const RainbowLight = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const StyledCardAccent = styled.div`
  background: #008e46;
  background-size: 300% 300%;
  border-radius: 25px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const FCard = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  border-radius: 32px;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.borderColor};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`

interface FarmCardProps {
  farm: FarmWithStakedValue
  removed: boolean
  cakePrice?: BigNumber
  bnbPrice?: BigNumber
  ethereum?: provider
  account?: string
  type?: string
}

const FarmCard: React.FC<FarmCardProps> = ({ farm, removed, cakePrice, bnbPrice, ethereum, account, type }) => {
  const TranslateString = useI18n()

  const [showExpandableSection, setShowExpandableSection] = useState(false)
  const { id, pid } = useFarmFromPid(farm.pid, farm.id)
  const {tokenBalance, stakedBalance, earnings } = useFarmUser(pid, id)
  // const isCommunityFarm = communityFarms.includes(farm.tokenSymbol)
  // We assume the token name is coin pair + lp e.g. CAKE-BNB LP, LINK-BNB LP,
  // NAR-CAKE LP. The images should be cake-bnb.svg, link-bnb.svg, nar-cake.svg
  // const farmImage = farm.lpSymbol.split(' ')[0].toLocaleLowerCase()
  const farmImage = farm.isTokenOnly ? farm.token.symbol.toLowerCase() : `${farm.token.symbol.toLowerCase()}-${farm.quoteToken.symbol.toLowerCase()}`
  const totalValue: BigNumber = useMemo(() => {
    if (!farm.lpTotalInQuoteToken) {
      return null
    }
    if (farm.quoteToken.symbol === QuoteToken.BNB) {
      return bnbPrice.times(farm.lpTotalInQuoteToken)
    }
    if (farm.quoteToken.symbol === QuoteToken.CAKE) {
      return cakePrice.times(farm.lpTotalInQuoteToken)
    }
    return farm.lpTotalInQuoteToken
  }, [bnbPrice, cakePrice, farm.lpTotalInQuoteToken, farm.quoteToken.symbol])

  const totalValueFormated = totalValue
    ? `$${Number(totalValue).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    : '-'

    const lpPrice = useMemo(() => {
        return Number(totalValue) / Number(farm.lpTokenBalanceMC)
    }, [farm, totalValue])

    const lpTokenPriceFormated = lpPrice
        ? `${Number(lpPrice).toLocaleString(undefined, { maximumFractionDigits: 2 })}`
        : '-'

  const lpLabel = farm.lpSymbol
  let earnLabel = ""
  if (type === 'Sugar')
    earnLabel = 'SUGAR'
  else if (type === 'Mint')
    earnLabel = 'MINT'
  else
    earnLabel = 'TEASPORT'

  const farmAPY = farm.apy && farm.apy.times(new BigNumber(100)).toNumber().toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

    const lpPriceFormated = lpPrice
        ? `$${Number(lpPrice).toLocaleString(undefined, { maximumFractionDigits: 2 })}`
        : '-'

  const { quoteToken, token, risk } = farm

  return (
    <FCard>
      {farm.token.symbol === 'SUGAR' && <StyledCardAccent />}
      <CardHeading
        lpLabel={lpLabel}
        multiplier={farm.multiplier}
        risk={risk}
        depositFee={farm.depositFeeBP}
        farmImage={farmImage}
        tokenSymbol={farm.token.symbol}
      />
      {!removed && (
        <Flex justifyContent='space-between' alignItems='center'>
          <Text>{TranslateString(352, 'APR')}:</Text>
          <Text bold style={{ display: 'flex', alignItems: 'center' }}>
            {farm.apy ? (
              <>
                <ApyButton
                  lpLabel={lpLabel}
                  quoteTokenAdresses={quoteToken.address}
                  quoteTokenSymbol={quoteToken.symbol}
                  tokenAddresses={token.address}
                  cakePrice={cakePrice}
                  apy={farm.apy}
                />
                {farmAPY}%
              </>
            ) : (
              <Skeleton height={24} width={80} />
            )}
          </Text>
        </Flex>
      )}
      <Flex justifyContent='space-between'>
        <Text>{TranslateString(318, 'Earn')}:</Text>
        <Text bold>{earnLabel}</Text>
      </Flex>
      <Flex justifyContent='space-between'>
        <Text style={{ fontSize: '24px' }}>{TranslateString(10001, 'Deposit Fee')}:</Text>
        <Text bold style={{ fontSize: '24px' }}>{(farm.depositFeeBP / 100)}%</Text>
      </Flex>
      <CardActionsContainer farm={farm} ethereum={ethereum} account={account} type={type}/>
      <Divider />
      <ExpandableSectionButton
        onClick={() => setShowExpandableSection(!showExpandableSection)}
        expanded={showExpandableSection}
      />
      <ExpandingWrapper expanded={showExpandableSection}>
        <DetailsSection
          removed={removed}
          isTokenOnly={farm.isTokenOnly}
          bscScanAddress={
            farm.isTokenOnly ?
              `https://bscscan.com/token/${farm.token.address[process.env.REACT_APP_CHAIN_ID]}`
              :
              `https://bscscan.com/token/${farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]}`
          }
          totalValueFormated={totalValueFormated}
          lpTokenPriceFormated={lpTokenPriceFormated}
          lpLabel={lpLabel}
          quoteTokenAdresses={quoteToken.address}
          quoteTokenSymbol={quoteToken.symbol}
          tokenAddresses={token.address}
          valueLp={lpPriceFormated}
          earnedValue = {getBalanceNumber(earnings)*cakePrice.toNumber()}
          liquidityValue = {getBalanceNumber(stakedBalance)*lpPrice}
        />
      </ExpandingWrapper>
    </FCard>
  )
}

export default FarmCard
