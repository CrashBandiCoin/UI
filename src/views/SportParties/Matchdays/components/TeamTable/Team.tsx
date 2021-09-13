import React from 'react'
import styled from 'styled-components'
import { Text, Image } from '@pancakeswap-libs/uikit'

export interface TeamProps {
  id: number
  label: string
  icon: string
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

const Team: React.FunctionComponent<TeamProps> = ({ label, icon }) => {
  return (
    <Container>
      {icon && (
        <TokenWrapper>
          <Image src={`/images/football/${icon.toLowerCase()}.png`} alt="" width={48} height={48} />
        </TokenWrapper>
      )}

      <div>
        <Text bold color="primary" fontSize="16px">
          {label}
        </Text>
      </div>
    </Container>
  )
}

export default Team
