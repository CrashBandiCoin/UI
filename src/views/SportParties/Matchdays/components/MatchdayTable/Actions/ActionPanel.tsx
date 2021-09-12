import React from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes, css } from 'styled-components'
import { LinkExternal, Text } from '@pancakeswap-libs/uikit'

import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { getBscScanAddressUrl } from 'utils/bscscan'

import { Matchday } from 'state/types'
import Matches from 'views/SportParties/Matchdays/Matches'
import TheDate, { TheDateProps } from '../TheDate'
import { MatchdayProps } from '../Matchday'

export interface ActionPanelProps {
  matchday: MatchdayProps
  theDate: TheDateProps
  details: Matchday
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

const ActionPanel: React.FunctionComponent<ActionPanelProps> = ({ details, expanded }) => {
  const data = details
  return (
    <Container expanded={expanded}>
      <Matches {...details} />
    </Container>
  )
}

export default ActionPanel
