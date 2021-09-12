import React from 'react'
import styled from 'styled-components'
import { Image, Heading, RowType, Toggle, Text } from '@pancakeswap-libs/uikit'
import { MatchConfig } from 'config/constants/types'

export interface MatchesProps {
  matches: MatchConfig[]
}

const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
`

const Matches: React.FC<MatchesProps> = ({ matches }) => {
  return (
    <>
      {matches.map((match) => {
        return <Text> {match.matchDate} </Text>
      })}
    </>
  )
}
export default Matches
