import React, { useEffect, useRef } from 'react'
import { useCountUp } from 'react-countup'
import { Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'

interface TvlValueProps {
  value: number
  decimals?: number
}

const TvlValue: React.FC<TvlValueProps> = ({ value, decimals}) => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: value,
    duration: 1,
    separator: ',',
    decimals:
      // eslint-disable-next-line no-nested-ternary
      decimals !== undefined ? decimals : value < 0 ? 4 : value > 1e5 ? 0 : 3,
  })

  const updateValue = useRef(update)

  const TvlText = styled(Text)`
    background: -webkit-linear-gradient(1turn, #00a23d, #005a5c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 80px;
    @media screen and (max-width:968px) {
      font-size: 40px;
    }
  `
  useEffect(() => {
    updateValue.current(value)
  }, [value, updateValue])

  return (
    <TvlText bold>
      ${countUp}
    </TvlText>
  )
}

export default TvlValue
