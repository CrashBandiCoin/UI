import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled, { keyframes } from 'styled-components'
import useI18n from 'hooks/useI18n'
import { Link } from "react-router-dom";
import RSK from '../img/Homepage_Panel_RSK.png'


const NextFeature3 = () => {
  const TranslateString = useI18n()

  return (
    <>
      <div className="cards-list">
        <a href="https://teaswap.gitbook.io/teaswap/features/tech-innovations/cross">
          <div className="card 1">
            <div className="ribbon ribbon-top-right"><span>NEW BLOCKCHAIN</span></div>
            <div className="card_image"><img src={RSK} alt=""/></div>
          </div>
        </a>

      </div>
    </>
      // <StyledSportPartie>
      //   <Heading size="xl" mb="24px">
      //     <br/>
      //     <Row>New Feature Launched</Row>
      //   </Heading>
      //     <Row>
      //       <Link to="/SportParties/Championsleague">
      //       <img
      //       src={ChampionsLeague}
      //       loading='lazy'
      //       alt=''
      //     />
      //       </Link>
      //       </Row>
      //   <br/>
      //   <Row>SportParty 3 : 09/14/21</Row>
      // </StyledSportPartie>
  )
}

export default NextFeature3
