import React from 'react'
import Page from 'components/layout/Page'
import styled from 'styled-components'
import { Heading } from '@pancakeswap-libs/uikit'
import IframeResizer from 'iframe-resizer-react'

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

const Zap: React.FC = () => {
  const params = new URLSearchParams(window.location.search)
  const from = params.get('from') ?? defaultFrom
  const to = params.get('to') ?? defaultTo
  const slippage = params.get('slippage') ?? defaultSlippage

  const iframeUrl = `https://lp-swap.io/embed?${new URLSearchParams({ from, to, slippage, mode, referral })}`

  return (
    <Page>
      <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center', paddingTop: '100px' }}>
        Zap helps LP token conversion
      </Heading>
      <Hero>
        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <IframeResizer src={iframeUrl} style={{ width: 350, height: 450 }} frameBorder="0" />
      </Hero>
    </Page>
  )
}

export default Zap

const defaultFrom = ''
const defaultTo = 'lpPcsV2-wallet-0x8e4848DC6535742824d19dA9F19901D01d9f6988'
const defaultSlippage = ''
const mode = 'light' // 'light' or 'dark'
const referral = '0xF12FdC0B13FE896bE9B3BEcEB41c269FC8eB522B' // the wallet address to send 50% of fees
