import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from '@pancakeswap-libs/uikit'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import {
  useFarms,
  usePriceBnbBusd,
  usePriceCakeBusd,
  usePriceMintBusd,
  usePriceTeaSportBusd,
} from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'

export interface FarmsProps{
  tokenMode?: boolean
  type?: string
}

const Farms: React.FC<FarmsProps> = (farmsProps) => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const cakePrice = usePriceCakeBusd()
  const mintPrice = usePriceMintBusd()
  const teasportPrice = usePriceTeaSportBusd()
  const bnbPrice = usePriceBnbBusd()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const {tokenMode, type} = farmsProps;

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stakedOnly, setStakedOnly] = useState(false)

  const activeFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.type === type && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.type === type && farm.multiplier === '0X')

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      // const cakePriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        // if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
        //   return farm
        // }
        let cakeRewardPerBlock = null
        if (farm.type === 'Mint') {
          cakeRewardPerBlock = new BigNumber(farm.MintPerBlock || 1).times(new BigNumber(farm.poolWeight)) .div(new BigNumber(10).pow(18))
        } else if (farm.type === 'TeaSport') {
          cakeRewardPerBlock = new BigNumber(farm.TeaSportPerBlock || 1).times(new BigNumber(farm.poolWeight)) .div(new BigNumber(10).pow(18))
        } else {
          cakeRewardPerBlock = new BigNumber(farm.SUGARPerBlock || 1).times(new BigNumber(farm.poolWeight)) .div(new BigNumber(10).pow(18))
        }

        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = null
        if (farm.type === 'Mint') {
          apy = mintPrice.times(cakeRewardPerYear);
        } else if (farm.type === 'TeaSport') {
          apy = teasportPrice.times(cakeRewardPerYear);
        } else {
          apy = cakePrice.times(cakeRewardPerYear);
        }

        let totalValue = new BigNumber(farm.lpTotalInQuoteToken || 0);

        if (farm.quoteToken.symbol === QuoteToken.BNB) {
          totalValue = totalValue.times(bnbPrice);
        }

        if (farm.quoteToken.symbol === QuoteToken.CAKE) {
          totalValue = totalValue.times(cakePrice);
        }
        
        if(totalValue.comparedTo(0) > 0){
          apy = apy.div(totalValue);
        }

        return { ...farm, apy }
      })
      
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.id}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          cakePrice={farm.type === 'TeaSport' ? teasportPrice : cakePrice}
          ethereum={ethereum}
          account={account}
          type={type}
        />
      ))
    },
    [bnbPrice, account, cakePrice, type, mintPrice, teasportPrice, ethereum],
  )

  return (
    <Page>
      <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center' }}>
        {
          tokenMode ?
            TranslateString(10002, 'Stake tokens to earn token reward !')
            :
          TranslateString(320, 'Stake LP tokens to earn token reward !')
        }
      </Heading>
      <FarmTabButtons stakedOnly={stakedOnly} setStakedOnly={setStakedOnly}/>
      <div>
        <Divider />
        <FlexLayout>
          <Route exact path={`${path}`}>
            {stakedOnly ? farmsList(stakedOnlyFarms, false) : farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
        </FlexLayout>
      </div>
      {/* <Image src="/images/SUGAR/8.png" alt="illustration" width={1352} height={587} responsive /> */}
    </Page>
  )
}

export default Farms
