import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'


const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  text-align: center;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>

        <Heading size="h1" mb="24px">
          <CardValue value={totalValue.toNumber()} prefix="$" decimals={2}/>
        </Heading>
        <>
          <Text color="textSubtle">Total Deposit Value at TeaSwap</Text>
        </>
    </StyledTotalValueLockedCard>

  )
}

export default TotalValueLockedCard
