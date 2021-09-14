import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled, { keyframes } from 'styled-components'
import useI18n from 'hooks/useI18n'
import { Link } from "react-router-dom";
import ChampionsLeague from '../img/foot/championsLeague.jpg'




const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const RainbowLight = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const StyledSportPartie = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background: linear-gradient(45deg,
  rgba(255, 0, 0, 1) 0%,
  rgba(255, 154, 0, 1) 10%,
  rgba(208, 222, 33, 1) 20%,
  rgba(79, 220, 74, 1) 30%,
  rgba(63, 218, 216, 1) 40%,
  rgba(47, 201, 226, 1) 50%,
  rgba(28, 127, 238, 1) 60%,
  rgba(95, 21, 242, 1) 70%,
  rgba(186, 12, 248, 1) 80%,
  rgba(251, 7, 217, 1) 90%,
  rgba(255, 0, 0, 1) 100%);
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 16px;
`

const Row = styled.div`
  align-items: center;
  text-align: center;
`

const TextGreen = styled.div`
  align-items: center;
  text-align: center;
  color: green;
  font-size: 30px;
  
`

const NextFeature = () => {
  const TranslateString = useI18n()

  return (
      <StyledSportPartie>
        <Heading size="xl" mb="24px">
          <br/>
          <Row>New Feature Launched</Row>
        </Heading>
          <Row>
            <Link to="/SportParties/Championsleague">
            <img
            src={ChampionsLeague}
            loading='lazy'
            alt=''
          />
            </Link>
            </Row>
        <br/>
        <Row>SportParty 3 : 09/14/21</Row>
      </StyledSportPartie>
  )
}

export default NextFeature
