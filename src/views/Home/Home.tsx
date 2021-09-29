import React, { useState } from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Link } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import BigNumber from 'bignumber.js/bignumber'
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
import NextFeature from './components/NextFeature'
import ChampionsLeague from './img/foot/championsLeague.png'
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
  text-color: #005a5c;
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
  const logoMint = '/images/SUGAR/mint.png'
  const logoTeasport = '/images/SUGAR/teasportV1.png'
  const logoSugar = '/images/SUGAR/sugar.png'

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
    <Page>
      <Hero>
        The GameFi DAO linked to real life events
      </Hero>
      <br/>
      <br/>
      <Cards>
        <TotalValueLockedCard/>
      </Cards>
      <Cards>
        <NextFeature/>
      </Cards>
      <div >
        <SalesSection {...sugarSectionData} className="first" />
        <FarmStakingCard cakeBalance={sugarBalance} cakePrice={SUGARPrice} logo={logoSugar} label='SUGAR'
                         address={addressSugar}
                         totalSupply={sugarTotalSupply} circSupply={sugarCircSupply} supply={sugarSupply}
                         marketCap={sugarMarketCap} tokenPerBlock={SUGARPerBlock} burnBalance={sugarBurnedBalance} className="first" />

        <SalesSection {...mintSectionData} className="second" />
        <FarmStakingCard cakeBalance={mintBalance} cakePrice={MINTPrice}
                         logo={logoMint} label='MINT' address={addressMint}
                         totalSupply={mintTotalSupply} circSupply={mintCircSupply}
                         supply={mintSupply}
                         marketCap={mintMarketCap} tokenPerBlock={0}
                         burnBalance={mintBurnedBalance} className="second"/>
        <SalesSection {...teasportSectionData} className="third" />
        <FarmStakingCard cakeBalance={teasportBalance} cakePrice={TEASPORTPrice} logo={logoTeasport} label='TEASPORT'
                         address={addressTeasport}
                         totalSupply={teasportTotalSupply} circSupply={teasportCircSupply} supply={teasportSupply}
                         marketCap={teasportMarketCap} tokenPerBlock={0} burnBalance={teasportBurnedBalance} className="third" />
        <SocialCard />
      </div>
    </Page>
  )
}

export default Home
