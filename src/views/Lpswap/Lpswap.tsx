import React from 'react'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import styled from "styled-components";
import {Heading} from "@pancakeswap-libs/uikit";

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

const Lpswap: React.FC = () => {
    const TranslateString = useI18n()
    return (
        <Page>
            <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center', paddingTop:'130px'}}>
                You can direct swap here into SUGAR LPs from your wallet assets
            </Heading>
            <Hero>
            <div>
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe width="366" height="560" src="https://lp-swap.io/embed?from=single-wallet-0xe9e7cea3dedca5984780bafc599bd69add087d56&to=lpPcsV2-wallet-0x8e4848DC6535742824d19dA9F19901D01d9f6988&mode=light&referral=" />
            </div>
            </Hero>
        </Page>
    )
}

export default Lpswap
