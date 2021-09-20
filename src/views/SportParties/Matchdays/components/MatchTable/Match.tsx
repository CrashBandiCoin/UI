import React from 'react'
import styled from 'styled-components'
import { Tag, Text, Image } from '@pancakeswap-libs/uikit'
import { ChampionsLeagueToken } from 'config/constants/types'

export interface MatchProps {
  id: number
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
  width: 50px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 50px;
  }
`

const TagWrapper = styled(Tag)`
  margin-left: 5px;
`

const Match: React.FunctionComponent<MatchProps> = ({ winnerToken }) => {
  return (
    <Container>
      {!winnerToken && (
        <TokenWrapper>
          <Image src="/images/farms/blank.png" alt="" width={50} height={40} />
        </TokenWrapper>
      )}
      {winnerToken && winnerToken === ChampionsLeagueToken.DRAW && (
        <TagWrapper outline mr="8px">
          DRAW
        </TagWrapper>
      )}

      {winnerToken && winnerToken !== ChampionsLeagueToken.DRAW && (
        <TokenWrapper>
          <Image src={`/images/farms/${winnerToken.toLowerCase()}.png`} alt="" width={50} height={40} />
        </TokenWrapper>
      )}
    </Container>
  )
}

export default Match
