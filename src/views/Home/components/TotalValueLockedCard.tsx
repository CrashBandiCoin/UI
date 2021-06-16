import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'


const StyledTotalValueLockedCard = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  font-size:50px;
  color:green;
  text-shadow: 0 0 7px #35F506;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <h1>Total Value Locked (TVL) :  {totalValue.toNumber().toLocaleString(navigator.language, { minimumFractionDigits: 0 })} $ </h1>
    </StyledTotalValueLockedCard>

  )
}

export default TotalValueLockedCard
