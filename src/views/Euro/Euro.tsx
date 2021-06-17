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

const Euro: React.FC = () => {
    const TranslateString = useI18n()
    return (
        <Page>
            <Hero>
            <div>FOOTBALL</div>
            </Hero>
        </Page>
    )
}

export default Euro
