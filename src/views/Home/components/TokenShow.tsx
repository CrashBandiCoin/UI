import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'
import useI18n from 'hooks/useI18n'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const logoMint = '/images/SUGAR/mint.png'
const logoTeasport = '/images/SUGAR/teasportV1.png'
const logoSugar = '/images/SUGAR/sugar.png'

const TokenShow = () => {
  return (
      <CardBody>
        <Heading size="xl" mb="24px">
          Choose your token !
        </Heading>
        <br/>
        <Carousel itemsToShow={1} isRTL>
          <img
            src={logoSugar}
            loading='lazy'
            width="60px"
            alt=''
          />
          <img
            src={logoMint}
            loading='lazy'
            width="60px"
            alt=''
          />
          <img
            src={logoTeasport}
            loading='lazy'
            width="60px"
            alt=''
          />
        </Carousel>


      </CardBody>
  )
}

export default TokenShow
