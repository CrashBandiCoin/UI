import BigNumber from 'bignumber.js'
import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRefresh from 'hooks/useRefresh'
import { BIG_ZERO } from 'utils/bigNumber'
import { getBalanceAmount } from 'utils/formatBalance'
import { fetchFarmsPublicDataAsync, fetchPoolsPublicDataAsync, fetchPoolsUserDataAsync, fetchVaultsPublicDataAsync, fetchMatchdaysPublicDataAsync } from './actions'
import { State, Farm, Pool, Vault, Matchday } from './types'
import { QuoteToken, ChampionsLeagueToken } from '../config/constants/types'

const ZERO = new BigNumber(0)

export const useFetchPublicData = () => {
  const dispatch = useDispatch()
  const { slowRefresh } = useRefresh()
  useEffect(() => {
    dispatch(fetchFarmsPublicDataAsync())
    // dispatch(fetchVaultsPublicDataAsync())
    // dispatch(fetchPoolsPublicDataAsync())
    dispatch(fetchMatchdaysPublicDataAsync())
  }, [dispatch, slowRefresh])
}

// Farms

export const useFarms = (): Farm[] => {
  const farms = useSelector((state: State) => state.farms.data)
  return farms
}

export const useFarmFromPid = (pid, id): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid && f.id === id))
  return farm
}

export const useFarmFromSymbol = (lpSymbol: string): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.lpSymbol === lpSymbol))
  return farm
}

export const useFarmUser = (pid, id) => {
  const farm = useFarmFromPid(pid, id)

  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : new BigNumber(0),
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : new BigNumber(0),
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : new BigNumber(0),
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : new BigNumber(0),
  }
}

// Vaults

export const useVaults = (): Vault[] => {
  const vaults = useSelector((state: State) => state.vaults.data)
  return vaults
}

export const useVaultFromPid = (pid, id): Vault => {
  const vault = useSelector((state: State) => state.vaults.data.find((f) => f.pid === pid && f.id === id))
  return vault
}

export const useVaultFromSymbol = (lpSymbol: string): Vault => {
  const vault = useSelector((state: State) => state.vaults.data.find((f) => f.lpSymbol === lpSymbol))
  return vault
}

export const useVaultUser = (pid, id) => {
  const vault = useVaultFromPid(pid, id)
  let earnings = new BigNumber(0)
  if (vault.sharesTotal && vault.wantLockedTotal && vault.userData && vault.userData.stakedBalance) {
    const sharesTotal = new BigNumber(vault.sharesTotal)
    const wantLockedTotal = new BigNumber(vault.wantLockedTotal)
    const strategyValue = new BigNumber(wantLockedTotal.toNumber()).div(new BigNumber(sharesTotal.toNumber()))
    earnings = new BigNumber(vault.userData.stakedBalance).times(strategyValue.toNumber())
  }
  
  return {
    allowance: vault.userData ? new BigNumber(vault.userData.allowance) : new BigNumber(0),
    tokenBalance: vault.userData ? new BigNumber(vault.userData.tokenBalance) : new BigNumber(0),
    stakedBalance: vault.userData ? new BigNumber(vault.userData.stakedBalance) : new BigNumber(0),
    earnings
  }
}

export const useVaultFromLpSymbol = (lpSymbol: string): Vault => {
  const farm = useSelector((state: State) => state.vaults.data.find((f) => f.lpSymbol === lpSymbol))
  return farm
}


// Matchdays ( for Champions league )

export const useMatchdays = (): Matchday[] => {
  return  useSelector((state: State) => state.matchdays.data)
}


// export const useMatchdaysFromToken = (token: ChampionsLeagueToken): Matchday[] => {
//   return useSelector((state: State) => state.matchdays.data.find((md) => md.winnerToken && md.winnerToken === token))
// }


export const useMatchdayFromId = (id): Matchday => {
  return useSelector((state: State) => state.matchdays.data.find((md) => md.id === id))
}


// Pools

export const usePools = (account): Pool[] => {
  const { fastRefresh } = useRefresh()
  const dispatch = useDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const pools = useSelector((state: State) => state.pools.data)
  return pools
}

export const usePoolFromPid = (sousId): Pool => {
  const pool = useSelector((state: State) => state.pools.data.find((p) => p.sousId === sousId))
  return pool
}

// Prices

export const usePriceBnbBusd = (): BigNumber => {
  const pid = 2 // BUSD-BNB LP
  const id = 4
  const farm = useFarmFromPid(pid, id)
  return farm.tokenPriceVsQuote && farm.tokenPriceVsQuote !== new BigNumber('Infinity') ? new BigNumber(farm.tokenPriceVsQuote) : ZERO
}

export const usePriceCakeBusd = (): BigNumber => {
  // const pid = 1 // CAKE-BNB LP
  // const bnbPriceUSD = usePriceBnbBusd()
  // const farm = useFarmFromPid(pid)
  // return farm.tokenPriceVsQuote ? bnbPriceUSD.times(farm.tokenPriceVsQuote) : ZERO
  const pid = 1; // SUGAR-BUSD LP
  // const bnbPriceUSD = usePriceBnbBusd()
  const id = 2;
  const farm = useFarmFromPid(pid, id)
  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO;
}

export const usePricePanCakeBusd = (): BigNumber => {
  // const pid = 1 // CAKE-BNB LP
  // const bnbPriceUSD = usePriceBnbBusd()
  // const farm = useFarmFromPid(pid)
  // return farm.tokenPriceVsQuote ? bnbPriceUSD.times(farm.tokenPriceVsQuote) : ZERO
  const pid = 4; // CAKE-BUSD LP
  // const bnbPriceUSD = usePriceBnbBusd()
  const id = 8;
  const farm = useFarmFromPid(pid, id)
  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO;
}

export const usePriceMintBusd = (): BigNumber => { // TODO use to display MINT price
  // const pid = 1 // CAKE-BNB LP
  // const bnbPriceUSD = usePriceBnbBusd()
  // const farm = useFarmFromPid(pid)
  // return farm.tokenPriceVsQuote ? bnbPriceUSD.times(farm.tokenPriceVsQuote) : ZERO
  const pid = 1; // MINT-BUSD LP
  const id = 3;
  // const bnbPriceUSD = usePriceBnbBusd()
  const farm = useFarmFromPid(pid, id)
  return farm && farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO;
}

export const usePriceTeaSportBusd = (): BigNumber => { // TODO use to display MINT price
  const pid = 1; // MINT-BUSD LP
  const id = 23;
  // const bnbPriceUSD = usePriceBnbBusd()
  const farm = useFarmFromPid(pid, id)
  return farm && farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO;
}


export const useTotalValue = (): BigNumber => {
  const farms = useFarms();
  const bnbPrice = usePriceBnbBusd();
  const cakePrice = usePriceCakeBusd();
  const mintPrice = usePriceMintBusd();
  const tokenEventPrice = usePriceTeaSportBusd();
  let value = new BigNumber(0);
  for (let i = 0; i < farms.length; i++) {
    const farm = farms[i]
    if (farm.lpTotalInQuoteToken) {
      let val;
      if (farm.quoteToken.symbol === QuoteToken.BNB) {
        val = (bnbPrice.times(farm.lpTotalInQuoteToken));
      }else if (farm.quoteToken.symbol === QuoteToken.CAKE) {
        val = (cakePrice.times(farm.lpTotalInQuoteToken));
      }else{
        val = (farm.lpTotalInQuoteToken);
      }
      if (val)
        value = value.plus(val);
    }
  }
  return value;
}

export const useVaultTotalValue = (): BigNumber => {
  const farms = useVaults();
  const poolsLP = useFarms();
  const cakePrice = usePricePanCakeBusd()
  const bnbPrice = usePriceBnbBusd();
  const sugarPrice = usePriceCakeBusd();

  let value = new BigNumber(0);
  for (let i = 0; i < farms.length; i++) {
    const farm = farms[i]
    let tokenPrice = sugarPrice
    if (farm.id === 1) {
      tokenPrice = cakePrice
    } else if (farm.id === 3) {
      tokenPrice = new BigNumber("22.13")
    }
    const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(tokenPrice)
    value = value.plus(totalLiquidity)
  }
  return value;
}

export const useBusdPriceFromPid = (pid: number, id: number): BigNumber => {
  const farm = useVaultFromPid(pid, id)
  return farm && new BigNumber(farm.token.busdPrice)
}

export const useLpTokenPrice = (symbol: string) => {
  const farm = useVaultFromLpSymbol(symbol)
  const farmTokenPriceInUsd = useBusdPriceFromPid(farm.pid, farm.id)
  let lpTokenPrice = BIG_ZERO

  if (farm.lpTotalSupply && farm.lpTotalInQuoteToken) {
    // Total value of base token in LP
    const valueOfBaseTokenInFarm = farmTokenPriceInUsd.times(farm.tokenAmountTotal)
    // Double it to get overall value in LP
    const overallValueOfAllTokensInFarm = valueOfBaseTokenInFarm.times(2)
    // Divide total value of all tokens, by the number of LP tokens
    const totalLpTokens = getBalanceAmount(new BigNumber(farm.lpTotalSupply))
    lpTokenPrice = overallValueOfAllTokensInFarm.div(totalLpTokens)
  }

  return lpTokenPrice
}