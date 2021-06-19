import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import {useTotalSupply, useBurnedBalance, useTotalSupplyMint, useTotalSupplyTeaSport} from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getMintAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import {useFarms, usePriceMintBusd, usePriceTeaSportBusd} from '../../../state/hooks'
import iconMarketCap from '../img/iconMarketCap.svg'
import iconHongrie from '../img/matchs/hongrie.png'
import iconFrance from '../img/matchs/france.png'



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

const MintStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupplyTeaSport()
  const burnedBalance = useBurnedBalance(getMintAddress())
  const farms = useFarms();
  const TeaSportPrice = usePriceTeaSportBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const teasportSupply = getBalanceNumber(circSupply);
  const marketCap = TeaSportPrice.times(circSupply);

  let TeaSportPerBlock = 0;
  if(farms && farms[1] && farms[1].TeaSportPerBlock){
    TeaSportPerBlock = new BigNumber(farms[1].TeaSportPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledTeaSportStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(535, 'Match of the Day')}
        </Heading>
        <Row>
          <img src={iconHongrie} alt='marketCap' width='100'/>
          -
          <img src={iconFrance} alt='marketCap' width='100'/>
        </Row>
        LIVE !
      </CardBody>
    </StyledTeaSportStats>
  )
}

export default MintStats
