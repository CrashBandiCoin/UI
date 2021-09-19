import useCurrentTimeEachMin from 'hooks/useTimer'
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
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const TheDate: React.FC<TheDateProps> = ({ theDate }) => {
  const currentMillis = useCurrentTimeEachMin()
  const currentMillislusOneDay = currentMillis + 24 * 60 * 60 * 1000 // +1 day

  const matchDate = new Date(theDate)
  const dayName = days[matchDate.getUTCDay()]
  const date = matchDate.getUTCDate()

  const year = matchDate.getUTCFullYear()
  const monthName = months[matchDate.getUTCMonth()]

  const formatted = `${dayName}, ${date} ${monthName} ${year}`

  if (matchDate.getTime() < currentMillis) {
    return (
      <Container>
        <TheDateWrapper>started at : {formatted}</TheDateWrapper>
      </Container>
    )
  }

  // in the past
  if (matchDate.getTime() < currentMillislusOneDay) {
    const diffMillis = new Date(matchDate.getTime() - currentMillis)

    // less than 24 hours
    return (
      <Container>
        <TheDateWrapper>
          Start in {diffMillis.getUTCHours()}h, {diffMillis.getUTCMinutes()}m
        </TheDateWrapper>
      </Container>
    )
  }

  // else
  return (
    <Container>
      <TheDateWrapper>Start at : {formatted}</TheDateWrapper>
    </Container>
  )
}

export default TheDate
