import React from 'react'
import styled, { keyframes, css } from 'styled-components'

import { Match } from 'state/types'
import Teams from 'views/SportParties/Matchdays/Teams'
import { TheDateProps } from '../TheDate'
import { MatchProps } from '../Match'
import { TheWinnerTeamProps } from '../TheWinnerTeam'

export interface ActionPanelProps {
  match: MatchProps
  theDate: TheDateProps
  theWinnerTeam: TheWinnerTeamProps
  details: Match
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

  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
    flex-direction: column;
  }
`

const ActionPanel: React.FunctionComponent<ActionPanelProps> = ({ details, expanded }) => {
  return (
    <Container expanded={expanded}>
      <Teams {...details} />
    </Container>
  )
}

export default ActionPanel
