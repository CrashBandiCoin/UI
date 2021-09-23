import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled, { keyframes } from 'styled-components'
import useI18n from 'hooks/useI18n'
import { Link } from "react-router-dom";
import ChampionsLeague from '../img/foot/championsLeague.jpg'


const NextFeature = () => {
  const TranslateString = useI18n()

  return (
    <>
      <div className="cards-list">
        <Link to="/SportParties/Championsleague">
          <div className="card 1">
            <div className="ribbon ribbon-top-right"><span>NEW FEATURE</span></div>
            <div className="card_image"><img src={ChampionsLeague} alt=""/></div>
            <div className="card_title title-white">
              <p>SportParty 3</p>
              <p className="subtitle">09/14/21</p>
            </div>
          </div>
        </Link>

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

export default NextFeature
