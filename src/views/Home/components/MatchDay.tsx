import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import iconPays1 from '../img/matchs/france.png'
import iconPays2 from '../img/matchs/suisse.png'
import iconPays3 from '../img/matchs/belgique.png'
import iconPays4 from '../img/matchs/portugal.png'

const StyledTeaSportStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 8px;
`

const Row2 = styled.div`
  color:red;
`

const Match = () => {
    return (
        <StyledTeaSportStats>
            <CardBody>
                <Heading size="xl" mb="24px">
                    Match of the Day
                </Heading>
                <Row>
                    <img src={iconPays1} alt='marketCap' width='100'/>
                    3 - 3
                    <img src={iconPays2} alt='marketCap' width='100'/>
                </Row>
                <br />
                <br />
                <b>Emission block bonus : 0 </b>

            </CardBody>
<br />
            <CardBody>
                <Heading size="xl" mb="24px">
                    Last Match
                </Heading>
                <Row>
                    <img src={iconPays3} alt='marketCap' width='100'/>
                    1 - 0
                    <img src={iconPays4} alt='marketCap' width='100'/>
                </Row>
                <br />
                <br />
                <b>Emission block bonus : x2 </b>

            </CardBody>
        </StyledTeaSportStats>
    )
}

export default Match