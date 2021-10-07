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
  text-align: right;
  font-size: 24px;
`

const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <Container>
      <ScoreWrapper>{score}</ScoreWrapper>
    </Container>
  )
}

export default Score
