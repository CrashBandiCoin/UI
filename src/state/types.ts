import BigNumber from 'bignumber.js'
import { FarmConfig, PoolConfig, VaultConfig, MatchdayConfig, MatchConfig, TeamConfig, ChampionsLeagueToken } from 'config/constants/types'

export interface Farm extends FarmConfig {
  tokenAmount?: BigNumber
  // quoteTokenAmount?: BigNumber
  quoteTokenAmountTotal?: BigNumber
  tokenAmountTotal?: BigNumber
  lpTotalInQuoteToken?: BigNumber
  tokenPriceVsQuote?: BigNumber
  poolWeight?: number
  depositFeeBP?: number
  MintPerBlock?: number
  SUGARPerBlock?: number
  TeaSportPerBlock?: number
  userData?: {
    allowance: BigNumber
    tokenBalance: BigNumber
    stakedBalance: BigNumber
    earnings: BigNumber
  }
  lpTotalSupply?: BigNumber
  lpTokenBalanceMC?: BigNumber
}

export interface Pool extends PoolConfig {
  totalStaked?: BigNumber
  startBlock?: number
  endBlock?: number
  userData?: {
    allowance: BigNumber
    stakingTokenBalance: BigNumber
    stakedBalance: BigNumber
    pendingReward: BigNumber
  }
}

export interface Vault extends VaultConfig {
  tvl?: number
  apr?: number
  userData?: {
    allowance: BigNumber
    tokenBalance: BigNumber
    stakedBalance: BigNumber
    earnings: BigNumber
  }
  depositFeeBP?: number
  tokenPriceVsQuote?: BigNumber
  lpTotalSupply?: BigNumber
  lpTotalInQuoteToken?: BigNumber
  quoteTokenAmountTotal?: BigNumber
  tokenAmountTotal?: BigNumber
}

export interface Match extends MatchConfig {
  winnerToken?: ChampionsLeagueToken

}

export interface Matchday extends MatchdayConfig {
  winnerToken?: ChampionsLeagueToken
  filledMatches?: Match[]
}

// Slices states

export interface FarmsState {
  data: Farm[]
}

export interface PoolsState {
  data: Pool[]
}

export interface VaultState {
  data: Vault[]
}

export interface MatchdayState {
  data: Matchday[]
}

// Global state

export interface State {
  farms: FarmsState
  pools: PoolsState
  vaults: VaultState
  matchdays: MatchdayState
}
