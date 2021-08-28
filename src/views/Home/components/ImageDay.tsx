import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import TelegramEmbed from 'react-telegram-embed'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'
import DappRadar from '../img/dappradar.png'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  display: inline-block;
  text-align: center;
  
`

const NFT ="/images/nfts/teaswap/tRex.png"

const ImageDay = () => {
  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          Design of the Day
        </Heading>
        <Row>
          <img
            src={NFT}
            loading='lazy'
            alt=''
          />
        </Row>

      </CardBody>
    </StyledTwitterCard>
  )
}

export default ImageDay
