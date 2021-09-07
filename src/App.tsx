import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import PageLoader from './components/PageLoader'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import NftGlobalNotification from './views/Nft/components/NftGlobalNotification'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const Lottery = lazy(() => import('./views/Lottery'))
const LotteryTeasport = lazy(() => import('./views/LotteryTeasport'))
const Roadmap = lazy(() => import('./views/Roadmap'))
const Vaults = lazy(() => import('./views/Vaults'))
const Zap = lazy(() => import('./views/Zap'))
// const Pools = lazy(() => import('./views/Pools'))
const Ifos = lazy(() => import('./views/Ifos'))
const Chart = lazy(() => import('./views/Chart'))
const NotFound = lazy(() => import('./views/NotFound'))
// const Nft = lazy(() => import('./views/Nft'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  useFetchPublicData()

  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/farms/mint">
              <Farms type='Mint'/>
            </Route>
            <Route path="/pools/mint">
              <Farms type='Mint' tokenMode/>
            </Route>
            <Route path="/farms/sugar">
              <Farms type='Sugar'/>
            </Route>
            <Route path="/pools/sugar">
              <Farms type='Sugar' tokenMode />
            </Route>
            <Route path="/farms/teasport">
              <Farms type='TeaSport'/>
            </Route>
            <Route path="/pools/teasport">
              <Farms type='TeaSport' tokenMode />
            </Route>
            <Route path="/vaults">
              <Vaults />
            </Route>
             <Route path="/zap">
                 <Zap/>
             </Route>
            <Route path="/roadmap">
              <Roadmap/>
            </Route>
            {/* <Route path="/migration"> */}
                {/* <Migration/> */}
            {/* </Route> */}
            {/* <Route path="/pools"> */}
            {/*  <Pools /> */}
            {/* </Route> */}
            <Route path="/raffleSugar">
              <Lottery />
            </Route>
            <Route path="/raffleTeasport">
              <LotteryTeasport />
            </Route>
            <Route path="/ifo">
             <Ifos />
            </Route>
            <Route path="/chart">
              <Chart />
            </Route>
            {/* <Route path="/nft"> */}
            {/*  <Nft /> */}
            {/* </Route> */}
            {/* Redirect */}
            {/* <Route path="/staking"> */}
            {/*  <Redirect to="/pools" /> */}
            {/* </Route> */}
            {/* <Route path="/syrup"> */}
            {/*  <Redirect to="/pools" /> */}
            {/* </Route> */}
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>
      </Menu>
      <NftGlobalNotification />
    </Router>
  )
}

export default React.memo(App)
