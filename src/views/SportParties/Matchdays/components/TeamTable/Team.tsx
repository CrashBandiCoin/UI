import React from 'react'
import styled from 'styled-components'
import { Text, Tag, Image } from '@pancakeswap-libs/uikit'
import { ChampionsLeagueToken } from 'config/constants/types'

export interface TeamProps {
  id: number
  label: string
  votedToken?: ChampionsLeagueToken
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

const Team: React.FunctionComponent<TeamProps> = ({ label, votedToken }) => {
  return (
    <Container>
      {votedToken && (
        <TokenWrapper>
          <Image src={`/images/farms/${votedToken.toLowerCase()}.png`} alt="" width={40} height={40} />
        </TokenWrapper>
      )}

      <div>
        <Text bold color="primary" fontSize="12px">
          {label}
        </Text>

        {votedToken && (
          <Tag outline variant="success" mr="8px">
            {votedToken}
          </Tag>
        )}

        {!votedToken && (
          <Tag outline variant="warning" mr="8px">
            Not yet voted for SUGAR or TEASPORT token
          </Tag>
        )}
      </div>
    </Container>
  )
}

export default Team
