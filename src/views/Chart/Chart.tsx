import React from 'react'
import Page from 'components/layout/Page'
import styled from 'styled-components'
import { Heading } from '@pancakeswap-libs/uikit'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: auto;
  margin-bottom: 32px;
  text-align: center;
`

const Chart: React.FC = () => {

  return (
    <Page>
      <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center', paddingTop: '100px' }}>
        Charts
      </Heading>

    </Page>
  )
}

export default Chart

