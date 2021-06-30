import React from 'react'
import styled from 'styled-components'
import {Heading, Text, BaseLayout, Link} from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import MintStats from './components/MintStats'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import Soundcloud from './components/Soundcloud'
import DappRadar from './img/dappradar.png'
import SocialCard from "./components/SocialCard";
import TeaSportStats from "./components/TeaSportStats";
import MatchDay from "./components/MatchDay";
import iconPays1 from "./img/matchs/italie.png";
import iconPays2 from "./img/matchs/autriche.png";


const Hero = styled.div`
  align-items: center;
  background-image: url('/images/SUGAR/3.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({theme}) => theme.mediaQueries.lg} {
    background-image: url('/images/SUGAR/3.png'), url('/images/SUGAR/3b.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({theme}) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({theme}) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
    const TranslateString = useI18n()

    const pays1=iconPays1;
    const pays2=iconPays2;
    const score='SOON';
    const bonus=0;

    return (
        <Page>
            <Hero>
                <Heading as="h1" size="xl" mb="24px" color="secondary">
                    {TranslateString(576, 'TeaSwap Finance')}
                </Heading>
                <Text>{TranslateString(578, 'The first Social Farming Project on BSC.')}</Text>
            </Hero>
            <div>
                <Cards>
                    <FarmStakingCard/>
                    <TwitterCard/>
                </Cards>
                <Cards>
                    <MatchDay/>
                    <TeaSportStats/>
                </Cards>
                <TotalValueLockedCard/><br/>
                <Cards>
                    <MintStats/>
                    <CakeStats/>
                </Cards>
                <SocialCard/>




            </div>
        </Page>
    )
}

export default Home
