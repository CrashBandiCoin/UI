import React from 'react'
import styled from 'styled-components'

export interface TheWinnerTeamProps {
  label: string
}

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
`

const TheWinnerWrapper = styled.div`
  min-width: 60px;
  text-align: left;
`

const TheWinnerTeam: React.FunctionComponent<TheWinnerTeamProps> = ({ label }) => {
  return (
    <Container>
      <TheWinnerWrapper>{label}</TheWinnerWrapper>
    </Container>
  )
}

export default TheWinnerTeam
