import React from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes, css } from 'styled-components'
import { LinkExternal, Text } from '@pancakeswap-libs/uikit'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { getBscScanAddressUrl } from 'utils/bscscan'

import HarvestAction from './HarvestAction'
import StakedAction from './StakedAction'
import Apy, { ApyProps } from '../Apy'
import Multiplier, { MultiplierProps } from '../Multiplier'
import Liquidity, { LiquidityProps } from '../Liquidity'

export interface ActionPanelProps {
  apy: ApyProps
  multiplier: MultiplierProps
  liquidity: LiquidityProps
  details: FarmWithStakedValue
  userDataReady: boolean
  expanded: boolean
}

const expandAnimation = keyframes`
  from {
    max-height: 0px;
  }
  to {
    max-height: 500px;
  }
`

const collapseAnimation = keyframes`
  from {
    max-height: 500px;
  }
  to {
    max-height: 0px;
  }
`

const Container = styled.div<{ expanded }>`
  animation: ${({ expanded }) =>
    expanded
      ? css`
          ${expandAnimation} 300ms linear forwards
        `
      : css`
          ${collapseAnimation} 300ms linear forwards
        `};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  padding: 24px;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
    flex-direction: column;
    padding: 16px 32px;
  }
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const StakeContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
  }
`

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 16px;
  }

  > div {
    height: 24px;
    padding: 0 6px;
    font-size: 14px;
    margin-right: 4px;

    svg {
      width: 14px;
    }
  }
`

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
  }
`

const InfoContainer = styled.div`
  display: block;
  margin-top: 5px;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    flex-direction: row;
    margin-left: 48px;
    margin-bottom: 30px;
  }
`

const InfoWrapper = styled.div`
  display: block;
  margin-left: 0px;
  margin-top: 10px;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-right: 32px;
    margin-left: 24px;
  }
`

const ValueContainer = styled.div`
  display: block;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`

const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0px;
`

const ActionPanel: React.FunctionComponent<ActionPanelProps> = ({
  details,
  apy,
  multiplier,
  liquidity,
  userDataReady,
  expanded,
}) => {
  const farm = details

  const isActive = farm.multiplier !== '0X'
  const { quoteToken, token, dual } = farm
  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANCAKE', '')
  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAdresses: quoteToken.address,
    quoteTokenSymbol: quoteToken.symbol,
    tokenAddresses: token.address,
  })
  const lpAddress = farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const bsc = getBscScanAddressUrl(lpAddress)
  const info = `https://pancakeswap.info/pool/${lpAddress}`

  const farmApy = apy.value && apy.value.times(new BigNumber(100)).toNumber().toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  const farmApyDaily = apy.value && apy.value.times(new BigNumber(100)).div(new BigNumber(365)).toNumber().toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <Container expanded={expanded}>
      
      <ValueContainer>
        <ValueWrapper>
          <Text>APR</Text>
          <Apy {...apy} />
        </ValueWrapper>
        <ValueWrapper>
          <Text>Multiplier</Text>
          <Multiplier {...multiplier} />
        </ValueWrapper>
        <ValueWrapper>
          <Text>Liquidity</Text>
          <Liquidity {...liquidity} />
        </ValueWrapper>
      </ValueContainer>
      
      <ActionContainer>
        <HarvestAction {...farm} userDataReady={userDataReady} />
        <StakedAction {...farm} userDataReady={userDataReady} />
      </ActionContainer>

      <InfoContainer>
        <InfoWrapper style={{ marginLeft: 0 }}>
          <Text bold>APR : </Text>
          <Text small>{`Annual : ${farmApy}%`}</Text>
          <Text small>{`Daily : ${farmApyDaily}%`}</Text>
        </InfoWrapper>
        <InfoWrapper>
          <Text bold>Fees</Text>
          <Text small>Exit Fee: 0.1%</Text>
          <Text small>Buy Back/Burn: 2%</Text>
          <Text small>Network fee: 0.2%</Text>
          <Text small>Operational fee: 1.8%</Text>
        </InfoWrapper>
        <InfoWrapper style={{ maxWidth: 300 }}>
          <Text bold>{`Earns ${farm.lpSymbol}`}</Text>
          <Text small>Your {`${farm.lpSymbol}`} amount will grow over time as the farm rewards gets reinvested.</Text>
        </InfoWrapper>
      </InfoContainer>
      
    </Container>
    
  )
}

export default ActionPanel
