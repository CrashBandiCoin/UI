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
                <iframe width="366" height="560" src="https://lp-swap.io/embed?from=single-wallet-&to=lpPcsV2-beefy-0xb26642B6690E4c4c9A6dAd6115ac149c700C7dfE&mode=light&referral="/>
            </div>
            </Hero>
        </Page>
    )
}

export default Zap
