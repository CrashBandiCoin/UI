import React from 'react'
import styled from 'styled-components'

export interface TheDateProps {
  theDate: number
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
  const currentTime = new Date()
  const currentTimeMinus24 = new Date(currentTime.getTime() - 1000 * 60 * 60 * 24)
  const matchDate = new Date(theDate)

  if (matchDate < currentTime) {
    return (
      <Container>
        <TheDateWrapper>
          Started at : {matchDate.toLocaleDateString()} {matchDate.toLocaleTimeString()}
        </TheDateWrapper>
      </Container>
    )
  }
  // in the past

  if (matchDate < currentTimeMinus24) {
    // more than 24 hours
    return (
      <Container>
        <TheDateWrapper>
          Start at : {matchDate.toLocaleDateString()} {matchDate.toLocaleTimeString()}
        </TheDateWrapper>
      </Container>
    )
  }

  // else
  return (
    <Container>
      <TheDateWrapper>Match in : 1 hour 20 mn...</TheDateWrapper>
    </Container>
  )
}

export default TheDate
