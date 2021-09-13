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
  padding-right: 8px;
  width: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 40px;
  }
`

const Match: React.FunctionComponent<MatchProps> = ({ winnerToken }) => {
  return (
    <Container>
      <div>
        <Text bold color="primary" fontSize="32px">
          MATCH :
        </Text>
      </div>
      {winnerToken && (
        <TokenWrapper>
          <Image src={`/images/farms/${winnerToken.toLowerCase()}.png`} alt="" width={40} height={40} />
        </TokenWrapper>
      )}

      <div>
        {winnerToken && (
          <Tag outline variant="success" mr="8px">
            {winnerToken}
          </Tag>
        )}

        {!winnerToken && (
          <Tag outline variant="warning" mr="8px">
            Match not yet finished
          </Tag>
        )}
      </div>
    </Container>
  )
}

export default Match
