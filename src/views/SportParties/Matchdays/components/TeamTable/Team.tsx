import React from 'react'
import styled from 'styled-components'
import { Text, Image } from '@pancakeswap-libs/uikit'

export interface TeamProps {
  id: number
  label: string
  icon: string
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 250px;
    padding-left: 16px;
  }
`
const TokenWrapper = styled.div`
  width: 36px;
`

const Team: React.FunctionComponent<TeamProps> = ({ label, icon }) => {
  return (
    <Container>
      {icon && (
        <TokenWrapper>
          <Image src={`/images/football/${icon.toLowerCase()}.png`} alt="" width={36} height={30} />
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
