import React from 'react'
import { Card, CardBody, Heading} from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import Carousel from 'react-elastic-carousel'
import DappRadar from '../img/dappradar.png'
import DexGuru from '../img/dexguru.png'
import CoinHut from '../img/coinhut.png'
import CoinSniper from '../img/coinsniper.png'
import IcoHolder from '../img/icoholder.png'
import Dapp from '../img/dapp.png'
import Blockfolio from '../img/blockfolio.png'
import Delta from '../img/delta.png'
import CoinScope from '../img/Logo_CoinScope_OK.png'


const StyledCardBody = styled(CardBody)`
  @media screen and (max-width:968px) {
    text-align: center
  }
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const Imgcenter = styled.img`
  display: inline-block;
  height: 100%;
  vertical-align: middle;
`

const SocialCard = () => {
  const TranslateString = useI18n()

  return (
      <StyledCardBody>
            <a href='https://dappradar.com/binance-smart-chain/defi/teaswap' rel="noreferrer" target="_blank">
              <img
                src={DappRadar}
                loading='lazy'
                width='95px'
                alt=''
              />
            </a>


            <a href='https://coinhunt.cc/coin/2006554088' rel="noreferrer" target="_blank">
              <img
                src={CoinHut}
                loading='lazy'
                width='95px'
                alt=''
              />
            </a>

            <a href='https://coinsniper.net/coin/1473' rel="noreferrer" target="_blank">
              <img
                src={CoinSniper}
                loading='lazy'
                width='95px'
                alt=''
              />
            </a>

            <a href='https://icoholder.com/fr/teaswap-1001257' rel="noreferrer" target="_blank">
              <img
                src={IcoHolder}
                loading='lazy'
                width='95px'
                alt=''
              />
            </a>

            <a href='https://dex.guru/token/0x41AA9F842AF935cC71252C0dE4BFF13F821546b8-bsc' rel="noreferrer" target="_blank">
              <img
                src={DexGuru}
                loading='lazy'
                width='95px'
                alt=''
              />
            </a>

            <a href='https://www.dapp.com/app/teaswap-finance' rel="noreferrer" target="_blank">
              <img
                src={Dapp}
                loading='lazy'
                width='95px'
                alt=''
              />
            </a>

            <a href='https://blockfolio.com/' rel="noreferrer" target="_blank">
              <img
                src={Blockfolio}
                loading='lazy'
                width='95px'
                alt=''
              />
            </a>

            <a href='https://delta.app/en' rel="noreferrer" target="_blank">
              <img
                src={Delta}
                loading='lazy'
                width='95px'
                alt=''
              />
            </a>

            <a href='https://www.coinscope.co/coin/mintv2' rel="noreferrer" target="_blank">
              <img
                src={CoinScope}
                loading='lazy'
                width='95px'
                alt=''
              />
            </a>

      </StyledCardBody>
  )
}

export default SocialCard
