import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import TvlValue from './TvlValue'
import Tea from '../img/tea-1.png'


const CardBodyTvl = styled(CardBody)`
  align-items: stretch;
  display: flex;
  justify-content: center;
`

const ImgTea = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 40px;
  margin-left: 40px;
  @media screen and (max-width:968px) {
    width: 70px;
    height: 50px;
    margin-right: 10px;
    margin-left: 10px;
  }
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  const totalValue = useTotalValue();

  return (
    <CardBodyTvl>
      <ImgTea
        src={Tea}
        loading='lazy'
        alt=''
      />
      <TvlValue value={totalValue.toNumber()} decimals={2} />
      <ImgTea
        src={Tea}
        loading='lazy'
        width='90px'
        alt=''
      />
    </CardBodyTvl>

  )
}

export default TotalValueLockedCard
