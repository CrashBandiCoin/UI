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
