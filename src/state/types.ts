import BigNumber from 'bignumber.js'
import { FarmConfig, PoolConfig } from 'config/constants/types'

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

// Slices states

export interface FarmsState {
  data: Farm[]
}

export interface PoolsState {
  data: Pool[]
}

// Global state

export interface State {
  farms: FarmsState
  pools: PoolsState
  vaults: FarmsState
}
