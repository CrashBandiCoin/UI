import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'
import vaultIcon from '../img/vaultIcon.png'
import CoinHut from '../img/coinhut.png'


const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  text-align: center;
`

const Row = styled.div`
  align-items: center;
  text-align: center;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  // const tvl = totalValue.toFixed(2);

  return (
    <CardBody>
        <Heading size="h1" mb="24px">
          <Row><Text color="textSubtle">Total Deposit Value at TeaSwap</Text></Row>
          <br/><br/>
          <Row><img
            src={vaultIcon}
            loading='lazy'
            width='95px'
            alt=''
          /></Row><br/>
          <Row><CardValue value={totalValue.toNumber()} prefix="$" decimals={2}/></Row>
        </Heading>
        <>
        </>
    </CardBody>

  )
}

export default TotalValueLockedCard
