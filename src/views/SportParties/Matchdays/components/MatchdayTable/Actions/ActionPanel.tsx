import React from 'react'
import styled, { keyframes, css } from 'styled-components'

import { Matchday } from 'state/types'
import Matches from 'views/SportParties/Matchdays/Matches'
import { TheDateProps } from '../TheDate'
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
    max-height: 100%;
  }
`

const collapseAnimation = keyframes`
  from {
    max-height: 100%;
  }
  to {
    max-height: 0px;
  }
`

const Container = styled.div<{ expanded }>`
  animation: ${({ expanded }) =>
    expanded
      ? css`
          ${expandAnimation} 10ms linear forwards
        `
      : css`
          ${collapseAnimation} 10ms linear forwards
        `};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  width: 100%;
  flex-direction: column-reverse;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
    flex-direction: column;
  }
`

const ActionPanel: React.FunctionComponent<ActionPanelProps> = ({ details, expanded }) => {
  return (
    <Container expanded={expanded}>
      <Matches {...details} />
    </Container>
  )
}

export default ActionPanel
