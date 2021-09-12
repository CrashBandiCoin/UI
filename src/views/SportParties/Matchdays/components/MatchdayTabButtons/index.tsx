import React from 'react'
import styled from 'styled-components'
import { useLocation, Link, useRouteMatch } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, NotificationDot } from '@pancakeswap-libs/uikit'

interface MatchdayTabButtonsProps {
  hasStakeInFinishedMatchdays: boolean
}

const MatchdayTabButtons: React.FC<MatchdayTabButtonsProps> = ({ hasStakeInFinishedMatchdays }) => {
  const { url } = useRouteMatch()
  const location = useLocation()

  let activeIndex
  switch (location.pathname) {
    case '/farms':
      activeIndex = 0
      break
    case '/farms/history':
      activeIndex = 1
      break
    case '/farms/archived':
      activeIndex = 2
      break
    default:
      activeIndex = 0
      break
  }

  return (
    <Wrapper>
      <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
        <ButtonMenuItem as={Link} to={`${url}`}>
          Main Matchdays
        </ButtonMenuItem>
        <NotificationDot show={hasStakeInFinishedMatchdays}>
          <ButtonMenuItem as={Link} to={`${url}/history`}>
            GUSD Matchdays
          </ButtonMenuItem>
        </NotificationDot>
      </ButtonMenu>
    </Wrapper>
  )
}

export default MatchdayTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding-left: 12px;
    padding-right: 12px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 16px;
  }
`
