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
import { useFarms, usePriceCakeBusd, usePriceMintBusd, usePriceTeaSportBusd } from '../../state/hooks'
import { useAllEarningsByCategory } from '../../hooks/useAllEarnings'


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

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/SUGAR/3.png'), url('/images/SUGAR/3b.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
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

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

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

  return (
    <Page>
      <Hero>
        <Heading as='h1' size='xl' mb='24px' color='secondary'>
          {TranslateString(576, 'TeaSwap Finance')}
        </Heading>
        <Text>The first Social Farming Project</Text>
      </Hero>
      <TotalValueLockedCard />
      <br /><br /><br />
      <HorizontalBlock>
        <input type="image" src={logoMint} alt='mint logo' width={100} height={100} onClick={() => showToken('MINT')} />
        <input type="image" src={logoSugar} alt='sugar logo' width={100} height={100} onClick={() => showToken('SUGAR')} />
        <input type="image" src={logoTeasport} alt='sugar logo' width={100} height={100} onClick={() => showToken('TEASPORT')} />
      </HorizontalBlock>
      <br /><br /><br />
      <div>

        {showStats === 'MINT' &&
        <FarmStakingCard cakeBalance={mintBalance} cakePrice={MINTPrice}
                         logo={logoMint} label='MINT' address={addressMint}
                         totalSupply={mintTotalSupply} circSupply={mintCircSupply}
                         supply={mintSupply}
                         marketCap={mintMarketCap} tokenPerBlock={0}
                         burnBalance={mintBurnedBalance} />}
        {showStats === 'TEASPORT' &&
        <FarmStakingCard cakeBalance={teasportBalance} cakePrice={TEASPORTPrice} logo={logoTeasport} label='TEASPORT'
                         address={addressTeasport}
                         totalSupply={teasportTotalSupply} circSupply={teasportCircSupply} supply={teasportSupply}
                         marketCap={teasportMarketCap} tokenPerBlock={0} burnBalance={teasportBurnedBalance} />}
        {showStats === 'SUGAR' &&
        <FarmStakingCard cakeBalance={sugarBalance} cakePrice={SUGARPrice} logo={logoSugar} label='SUGAR'
                         address={addressSugar}
                         totalSupply={sugarTotalSupply} circSupply={sugarCircSupply} supply={sugarSupply}
                         marketCap={sugarMarketCap} tokenPerBlock={SUGARPerBlock} burnBalance={sugarBurnedBalance} />}
        <br /><br />
        <Cards>
          <ImageDay />
          <TwitterCard />
        </Cards>
        <SocialCard />
      </div>
    </Page>
  )
}

export default Home
