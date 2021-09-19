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
const DifDiv = styled.div`
  width: 54px;
`

const Matchday: React.FunctionComponent<MatchdayProps> = ({ label, winnerToken }) => {
  return (
    <Container>
      {winnerToken && (
        <TokenWrapper>
          <Image src={`/images/farms/${winnerToken.toLowerCase()}.png`} alt="" width={54} height={48} />
        </TokenWrapper>
      )}

      {!winnerToken && (
        <TokenWrapper>
          <Image src="/images/farms/blank.png" alt="" width={54} height={48} />
        </TokenWrapper>
      )}

      <Text bold color="primary" fontSize="32px">
        {label}
      </Text>
    </Container>
  )
}

export default Matchday
