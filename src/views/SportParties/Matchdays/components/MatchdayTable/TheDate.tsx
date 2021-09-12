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
  min-width: 60px;
  text-align: left;
`

const TheDate: React.FC<TheDateProps> = ({ theDate }) => {
  return (
    <Container>
      <TheDateWrapper>{theDate}</TheDateWrapper>
    </Container>
  )
}

export default TheDate
