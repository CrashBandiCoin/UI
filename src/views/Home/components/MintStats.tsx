import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import {useTotalSupply, useBurnedBalance, useTotalSupplyMint} from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getMintAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceMintBusd } from '../../../state/hooks'

const StyledMintStats = styled(Card)`
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
  const totalSupply = useTotalSupplyMint()
  const burnedBalance = useBurnedBalance(getMintAddress())
  const farms = useFarms();
  const MintPrice = usePriceMintBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const mintSupply = getBalanceNumber(circSupply);
  const marketCap = MintPrice.times(circSupply);

  let MintPerBlock = 0;
  if(farms && farms[1] && farms[1].MintPerBlock){
    MintPerBlock = new BigNumber(farms[1].MintPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledMintStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(535, 'Mint Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total Minted')}</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(10004, 'Circulating Supply')}</Text>
          {mintSupply && <CardValue fontSize="14px" value={mintSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(541, 'New Mint/block')}</Text>
          <Text bold fontSize="14px">{MintPerBlock}</Text>
        </Row>
      </CardBody>
    </StyledMintStats>
  )
}

export default MintStats
