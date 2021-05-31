import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'
import DappRadar from "../img/dappradar.png";
import DexGuru from "../img/dexguru.png";
import TechRate from "../img/techrate.jpg";

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

const SocialCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(10006, 'Social listing')}
        </Heading>
          <a href="https://dappradar.com/binance-smart-chain/defi/teaswap">
              <img
                  src={DappRadar}
                  loading="lazy"
                  width='150px'
                  alt=""
              />
          </a>
          <a href="https://dex.guru/token/0x41AA9F842AF935cC71252C0dE4BFF13F821546b8-bsc">
              <img
                  src={DexGuru}
                  loading="lazy"
                  width='90px'
                  alt=""
              />
          </a>

      </CardBody>
    </StyledTwitterCard>
  )
}

export default SocialCard
