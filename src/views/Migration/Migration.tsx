import React from 'react'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import styled from "styled-components";
import Button from 'views/Pools/components/HarvestButton';

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

const Migration: React.FC = () => {
    const TranslateString = useI18n()
    return (
        <Page>
            <Hero>
            <div>
                <p>Migration token MINT v1 to MINT v2 !</p> <br/>
                <h1>Your MINT v1 available : </h1><br/>
                <h1>Your MINT v2 available : </h1><br/><br/>
                <Button variant="default">Convert !</Button>
            </div>
            </Hero>
        </Page>
    )
}

export default Migration
