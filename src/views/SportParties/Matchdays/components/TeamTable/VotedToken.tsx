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
  width: 48px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 48px;
  }
`

const VotedToken: React.FC<VotedTokenProps> = ({ votedToken }) => {
  return (
    <Container>
      {votedToken && (
        <TokenWrapper>
          <Image src={`/images/farms/${votedToken.toLowerCase()}.png`} alt="" width={48} height={42} />
        </TokenWrapper>
      )}

      {!votedToken && (
        <a target="_blank" rel="noreferrer" href="https://snapshot.org/#/tea-swap.eth">
          <Tag outline variant="warning" mr="8px">
            Vote for your favorite token
          </Tag>
        </a>
      )}
    </Container>
  )
}

export default VotedToken
