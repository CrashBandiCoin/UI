import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled, {keyframes} from 'styled-components'
import inconChainlink from '../img/matchs/chainlink.png'
import iconRun from "../img/Olympics/run.png"
import iconBasket from "../img/Olympics/basket.png"
import iconFootball from "../img/Olympics/football.png"
import iconHand from "../img/Olympics/hand.png"
import iconVolley from "../img/Olympics/volley.png"

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

const StyledTeaSportStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  cursor: pointer;
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
  display: flex;
  font-size: 25px;
  text-align: center;
  margin-bottom: 8px;
  justify-content: space-between;
  margin: 30px;
  
`

const Row2 = styled.div`
align-items: center;
display: flex;
font-size: 25px;
text-align: center;
margin-bottom: 8px;
justify-content: center;
margin: 30px;
  
`

const Match = () => {
    return (
        <StyledTeaSportStats>
            <CardBody>
                <Heading size="xl" mb="24px">
                TeaSwapers vote results | SportParty2 (Olympics) !
                </Heading>
            <br />
                <Row>
                <img src={iconRun} alt='marketCap' width='50'/> Athletics MEN (100m) - LOSING VOTE ❌
                </Row>
               <Row><img src={iconBasket} alt='marketCap' width='50'/> BASKETBALL (MEN) - WINNING VOTE ✅ </Row>
               <Row> <img src={iconFootball} alt='marketCap' width='50'/> FOOTBALL (MEN) - WINNING VOTE ✅ </Row>
                <Row><img src={iconHand} alt='marketCap' width='50'/> HANDBALL (WOMEN) - WINNING VOTE ✅ </Row>
                <Row><img src={iconVolley} alt='marketCap' width='50'/> VOLLEYBALL (MEN) - WINNING VOTE ✅ </Row>
            
                <Row2>
                powered by <img src={inconChainlink} alt='marketCap' width='100'/> 
                </Row2>
            </CardBody>
        </StyledTeaSportStats>
    )
}

export default Match