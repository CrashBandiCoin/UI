import React from 'react'
import styled from 'styled-components'
import { Image, Tag } from '@pancakeswap-libs/uikit'
import { ChampionsLeagueToken } from 'config/constants/types'

export interface VotedTokenProps {
  votedToken: ChampionsLeagueToken
}

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
`
const TokenWrapper = styled.div`
  padding-right: 8px;
  width: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 40px;
  }
`

const VotedToken: React.FC<VotedTokenProps> = ({ votedToken }) => {
  return (
    <Container>
      {votedToken && (
        <TokenWrapper>
          <Image src={`/images/farms/${votedToken.toLowerCase()}.png`} alt="" width={40} height={40} />
        </TokenWrapper>
      )}

      {!votedToken && (
        <Tag outline variant="warning" mr="8px">
          Vote for your favorite token
        </Tag>
      )}
    </Container>
  )
}

export default VotedToken
