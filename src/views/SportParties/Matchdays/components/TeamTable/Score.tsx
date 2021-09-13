import React from 'react'
import styled from 'styled-components'

export interface ScoreProps {
  score: number
}

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
`

const ScoreWrapper = styled.div`
  min-width: 60px;
  text-align: left;
`

const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <Container>
      <ScoreWrapper>{score}</ScoreWrapper>
    </Container>
  )
}

export default Score
