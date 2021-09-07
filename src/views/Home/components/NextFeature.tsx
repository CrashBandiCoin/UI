import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import Carousel from 'react-elastic-carousel'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import TelegramEmbed from 'react-telegram-embed'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'
import Vault from '../img/vault.svg'
import ChampionsLeague from '../img/foot/championsLeague.jpg'
import Soccer from '../img/foot/soccer.png'


const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
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
      <CardBody>
        <Heading size="xl" mb="24px">
          Next Features coming :
        </Heading>
        <br/>
        <Carousel itemsToShow={1} isRTL>
          <img
            src={ChampionsLeague}
            loading='lazy'
            width="200px"
            alt=''
          />
        </Carousel>
        <br/>
        <Heading size="xl" mb="24px">
          <TextGreen>Sport Parties</TextGreen>
          <br/>
          <Row><img
            src={Soccer}
            loading='lazy'
            width="30px"
            alt=''
          /></Row>
        </Heading>

      </CardBody>
  )
}

export default NextFeature
