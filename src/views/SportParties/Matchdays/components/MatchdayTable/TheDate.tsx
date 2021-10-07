import React from 'react'
import styled from 'styled-components'

export interface TheDateProps {
  theDate: string
}

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
`

const TheDateWrapper = styled.div`
  text-align: left;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textSubtle};
  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 12px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 26px;
  }
`

const TheDate: React.FC<TheDateProps> = ({ theDate }) => {
  return (
    <Container>
      <TheDateWrapper>{theDate}</TheDateWrapper>
    </Container>
  )
}

export default TheDate
