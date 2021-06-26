import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import ReactPlayer from "react-player"


const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const Soundcloud = () => {
  const TranslateString = useI18n()
  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          {TranslateString(999, 'Music Party !')}
        </Heading>
        <>
            <ReactPlayer
                url="https://soundcloud.com/chicofficial/chic-le-freak" height='300px' width='400px'
            />
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default Soundcloud
