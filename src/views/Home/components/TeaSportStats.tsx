import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import {useTotalSupply, useBurnedBalance, useTotalSupplyMint, useTotalSupplyTeaSport} from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import {getMintAddress, getTeaSportAddress} from 'utils/addressHelpers'
import CardValue from './CardValue'
import {useFarms, usePriceMintBusd, usePriceTeaSportBusd} from '../../../state/hooks'
import iconMinted from '../img/iconMinted3.png'
import iconSupply from '../img/iconSupply3.png'
import iconMarketCap from "../img/iconMarketCap3.png";


const StyledTeaSportStats = styled(Card)`
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

const MintStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupplyTeaSport()
  const burnedBalance = useBurnedBalance(getTeaSportAddress())
  const farms = useFarms();
  const TeaSportPrice = usePriceTeaSportBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const teasportSupply = getBalanceNumber(circSupply);
  const marketCap = TeaSportPrice.times(circSupply);

  let TeaSportPerBlock = 0;
  farms.map(farm => {
    if (farm.id === 22 && farm.pid === 0 && farm.TeaSportPerBlock) {
      TeaSportPerBlock = new BigNumber(farm.TeaSportPerBlock).div(new BigNumber(10).pow(18)).toNumber();
    }
    return farm
  })

  return (
    <StyledTeaSportStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(535, 'TEASPORT Stats')}
        </Heading>
        <Row>
          <img src={iconMarketCap} alt='marketCap' width='30'/>
          <Text fontSize="14px">{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <img src={iconSupply} alt='minted' width='30'/>
          <Text fontSize="14px">{TranslateString(536, 'Total Minted')}</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <img src={iconMinted} alt='minted' width='30'/>
          <Text fontSize="14px">{TranslateString(10007, 'New TEASPORT/block')}</Text>
          <Text bold fontSize="14px">{TeaSportPerBlock}</Text>
        </Row>
        <br/>

      </CardBody>
    </StyledTeaSportStats>
  )
}

export default MintStats
