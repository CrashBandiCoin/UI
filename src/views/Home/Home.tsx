import React, { useState } from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Link } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import BigNumber from 'bignumber.js/bignumber'
import FlexLayout from 'components/layout/Flex'
import FarmStakingCard from './components/FarmStakingCard'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import SocialCard from './components/SocialCard'
import ImageDay from './components/ImageDay'
import useFarmsWithBalance from '../../hooks/useFarmsWithBalance'
import { getBalanceNumber } from '../../utils/formatBalance'
import useTokenBalance, {
  useBurnedBalance,
  useBurnedBalanceMint, useBurnedBalanceTeasport, useTotalSupply,
  useTotalSupplyMint,
  useTotalSupplyTeaSport,
} from '../../hooks/useTokenBalance'
import { getCakeAddress, getMintAddress, getTeaSportAddress } from '../../utils/addressHelpers'
import { useFarms, usePriceCakeBusd, usePriceMintBusd, usePriceTeaSportBusd, useTotalValue } from '../../state/hooks'
import { useAllEarningsByCategory } from '../../hooks/useAllEarnings'
import SalesSection from './components/SalesSection'
import {mintSectionData, sugarSectionData, teasportSectionData } from './components/SalesSection/data'
import CardValue from './components/CardValue'
import CardTokenHome from './components/CardTokenHome'
import NextFeature from './components/NextFeature'
import ChampionsLeague from './img/foot/championsLeague.png'
import Ifo from './img/Homepage_Panel_IFO.png'
import TeaDAO from './img/teadao.png'
import Discord from './img/discord.svg'
import Twitter from './img/twitter.svg'
import Medium from './img/medium.svg'
import TokenShow from './components/TokenShow'

const Hero = styled.div`
  align-items: center;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  padding-bottom: 10px;
  padding-top: 10px;
  text-align: center;
  font-size: 30px;
  color: #005a5c;
  font-weight: bold;
`


const HorizontalBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`

const HorizontalBlock2 = styled.div`
  text-align: center;

`
const CardImage = styled.img`
  margin-bottom: 16px;
`

const TextTVL = styled.div`
  font-size: 50px;
  text-align: center;
`

const Cards = styled(BaseLayout)`
  margin-bottom: 48px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

`

const CardsHorizontale = styled(BaseLayout)`
  margin-bottom: 30px;
  align-items: center;
  display: flex;
  justify-content: center;
  @media screen and (max-width:968px) {
    flex-direction: column;
  }
`

const CardToken = styled.div`
  margin-bottom: 30px;
  background: ${(props) => props.theme.card.background};
  position: relative;

  &:after {
    width: 100%;
    display: block;
    height: 100%;
    right: -100%;
    position: absolute;
    content: "";
    background: ${(props) => props.theme.card.background};
    top: 0;

  }
  &:before {
    width: 100%;
    display: block;
    height: 100%;
    left: -100%;
    position: absolute;
    content: "";
    background: ${(props) => props.theme.card.background};

  }

  @media screen and (max-width:300px) {
    &:after {
      display: none;
    }
  }
`

const CardHarvest = styled.div`
  background: -webkit-linear-gradient(1turn,#00a23d,#005a5c);
  position: relative;
  margin-top: 100px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  &:after {
    width: 100%;
    display: block;
    height: 100%;
    right: -100%;
    position: absolute;
    content: "";
    background: #005a5c;
    top: 0;

  }
  &:before {
    width: 100%;
    display: block;
    height: 100%;
    left: -100%;
    position: absolute;
    content: "";
    background: #00a23d;

  }

  @media screen and (max-width:300px) {
    &:after {
      display: none;
    }
  }
`



const tvlLogo = "/images/tvlLogo.svg";

const Home: React.FC = () => {
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const [showStats, setStats] = useState()
  const allEarningsSugar = useAllEarningsByCategory('Sugar')

  // Balance token
  const sugarBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
  const mintBalance = getBalanceNumber(useTokenBalance(getMintAddress()))
  const teasportBalance = getBalanceNumber(useTokenBalance(getTeaSportAddress()))

  // Price token
  const MINTPrice = usePriceMintBusd()
  const SUGARPrice = usePriceCakeBusd()
  const TEASPORTPrice = usePriceTeaSportBusd()

  // burn token
  const mintBurnedBalance = useBurnedBalanceMint(getMintAddress())
  const teasportBurnedBalance = useBurnedBalanceTeasport(getTeaSportAddress())
  const sugarBurnedBalance = useBurnedBalance(getCakeAddress())

  // supply and marketcap token
  const mintTotalSupply = useTotalSupplyMint()
  const teasportTotalSupply = useTotalSupplyTeaSport()
  const sugarTotalSupply = useTotalSupply()

  const mintCircSupply = mintTotalSupply ? mintTotalSupply.minus(mintBurnedBalance) : new BigNumber(0)
  const teasportCircSupply = teasportTotalSupply ? teasportTotalSupply.minus(teasportBurnedBalance) : new BigNumber(0)
  const sugarCircSupply = sugarTotalSupply ? sugarTotalSupply.minus(sugarBurnedBalance) : new BigNumber(0)

  const mintSupply = getBalanceNumber(mintCircSupply)
  const teasportSupply = getBalanceNumber(teasportCircSupply)
  const sugarSupply = getBalanceNumber(sugarCircSupply)

  const mintMarketCap = MINTPrice.times(mintCircSupply)
  const teasportMarketCap = TEASPORTPrice.times(teasportCircSupply)
  const sugarMarketCap = SUGARPrice.times(sugarCircSupply)


  // address token
  const addressMint = getMintAddress()
  const addressTeasport = getTeaSportAddress()
  const addressSugar = getCakeAddress()

  // logo token
  const logoMint = '/images/egg/mint.png'
  const logoTeasport = '/images/egg/TeaSportV1.png'
  const logoSugar = '/images/egg/sugar.png'

  const farms = useFarms()

  let SUGARPerBlock = 0

  farms.map(farm => {
    if (farm.id === 0 && farm.pid === 0 && farm.SUGARPerBlock) {
      SUGARPerBlock = new BigNumber(farm.SUGARPerBlock).div(new BigNumber(10).pow(18)).toNumber()
    }
    return farm
  })

  const showToken = (val) => {
    setStats(val)
  }

  const totalValue = useTotalValue();
  const tvlImage = "";

  return (
    <Page style={{ maxWidth: '80%'}}>
      <Hero>
        TeaSwap become TeaDAO !
      </Hero>
      <br/>
      <br/>
      <Cards>
        <TotalValueLockedCard/>
      </Cards>
      <CardsHorizontale>
        <NextFeature title="Migration" ribbon="LIVE" img={TeaDAO} link="/migration" />
      </CardsHorizontale>
       <CardsHorizontale>
           {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
           <a href="https://twitter.com/TeaDaoFinance" target="_blank" rel="noreferrer"><img src={Twitter} alt='' width='100'/></a>
           {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
           <a href="https://discord.gg/rz3Vs4x3SU" target="_blank" rel="noreferrer"><img src={Discord} alt='' width='100'/></a>
           {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
           <a href="https://teadao.medium.com/" target="_blank" rel="noreferrer"><img src={Medium} alt='' width='100'/></a>
       </CardsHorizontale>
      <CardHarvest>
        <FarmStakingCard />
      </CardHarvest>
      <CardToken>
        <FlexLayout>
          <CardTokenHome  {...sugarSectionData}
                          cakeBalance={sugarBalance}
                          cakePrice={SUGARPrice} logo={logoSugar}
                          label='SUGAR'
                          colorHead="#cf0c54"
                          address={addressSugar}
                          totalSupply={sugarTotalSupply}
                          circSupply={sugarCircSupply}
                          supply={sugarSupply}
                          marketCap={sugarMarketCap}
                          tokenPerBlock={SUGARPerBlock}
                          burnBalance={sugarBurnedBalance}
          />

          <CardTokenHome  {...mintSectionData}
                          cakeBalance={mintBalance}
                          cakePrice={MINTPrice}
                          logo={logoMint}
                          label='MINT'
                          colorHead="#00755e"
                          address={addressMint}
                          totalSupply={mintTotalSupply}
                          circSupply={mintCircSupply}
                          supply={mintSupply}
                          marketCap={mintMarketCap}
                          tokenPerBlock={0}
                          burnBalance={mintBurnedBalance}
          />

          <CardTokenHome  {...teasportSectionData}
                          cakeBalance={teasportBalance}
                          cakePrice={TEASPORTPrice}
                          logo={logoTeasport}
                          label='TEASPORT'
                          colorHead="#de3c2d"
                          address={addressTeasport}
                          totalSupply={teasportTotalSupply}
                          circSupply={teasportCircSupply}
                          supply={teasportSupply}
                          marketCap={teasportMarketCap}
                          tokenPerBlock={0}
                          burnBalance={teasportBurnedBalance}
          />
        </FlexLayout>
      </CardToken>
      <div style={{textAlign: 'center'}}>
        <SocialCard />
      </div>
    </Page>
  )
}

export default Home
