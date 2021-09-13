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
    padding-left: 32px;
  }
`
const TokenWrapper = styled.div`
  margin-right: 8px;
  margin-left: 8px;

  width: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 40px;
  }
`

const TagWrapper = styled(Tag)`
  margin-left: 5px;
`

const Match: React.FunctionComponent<MatchProps> = ({ winnerToken }) => {
  return (
    <Container>
      {winnerToken && (
        <TokenWrapper>
          <Image src={`/images/farms/${winnerToken.toLowerCase()}.png`} alt="" width={40} height={40} />
        </TokenWrapper>
      )}

      <div>
        {!winnerToken && (
          <TagWrapper outline variant="warning" mr="8px">
            No Token Yet
          </TagWrapper>
        )}
      </div>
    </Container>
  )
}

export default Match
