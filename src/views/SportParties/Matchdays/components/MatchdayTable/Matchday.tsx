import React from 'react'
import styled from 'styled-components'
import { Text, Tag, Image } from '@pancakeswap-libs/uikit'
import { ChampionsLeagueToken } from 'config/constants/types'

export interface MatchdayProps {
  id: number
  label: string
  winnerToken?: ChampionsLeagueToken
}

const Container = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 16px;
  }
`
const TokenWrapper = styled.div`
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 54px;
  }
`

const LabelWrapper = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-align: left;
  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 16px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 26px;
  }
`

const Matchday: React.FunctionComponent<MatchdayProps> = ({ label, winnerToken }) => {
  return (
    <Container>
      {winnerToken && (
        <TokenWrapper>
          <Image src={`/images/farms/${winnerToken.toLowerCase()}.png`} alt="" width={58} height={48} />
        </TokenWrapper>
      )}

      {!winnerToken && (
        <TokenWrapper>
          <Image src="/images/farms/blank.png" alt="" width={58} height={48} />
        </TokenWrapper>
      )}

      <LabelWrapper>{label}</LabelWrapper>
    </Container>
  )
}

export default Matchday
