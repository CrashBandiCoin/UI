import React from 'react'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import styled from "styled-components";

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;
`

const Zap: React.FC = () => {
    const TranslateString = useI18n()
    return (
        <Page>
            <Hero>
            <div>
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe width="366" height="560" src="https://lp-swap.io/embed?from=single-wallet-0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&to=lpPcsV2-wallet-0x8e4848DC6535742824d19dA9F19901D01d9f6988&mode=light&referral="/>
            </div>
            </Hero>
        </Page>
    )
}

export default Zap
