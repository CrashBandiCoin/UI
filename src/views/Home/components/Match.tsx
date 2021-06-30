import React, {Component} from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'


const StyledTeaSportStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 30px;
  text-align: center;
  margin-bottom: 8px;
`

const Match = ({country1, country2, score, bonus}: any) => {

    return (
        <div>
          <Row>
            <img src={country1} alt='' width='100'/>
            {score} ({bonus})
            <img src={country2} alt='' width='100'/>
          </Row>
        </div>
    )
  }

export default Match
