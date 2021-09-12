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

const Matchday: React.FunctionComponent<MatchdayProps> = ({ id, label, winnerToken }) => {
  return (
    <Container>
      {winnerToken && (
        <TokenWrapper>
          <Image src={`/images/farms/${winnerToken.toLowerCase()}.png`} alt={label} width={40} height={40} />
        </TokenWrapper>
      )}

      <div>
        <Text bold color="primary" fontSize="12px">
          {label}
        </Text>

        {winnerToken && (
          <Tag outline variant="success" mr="8px">
            {winnerToken}
          </Tag>
        )}

        {!winnerToken && (
          <Tag outline variant="warning" mr="8px">
            Day not yet finished
          </Tag>
        )}
      </div>
    </Container>
  )
}

export default Matchday
