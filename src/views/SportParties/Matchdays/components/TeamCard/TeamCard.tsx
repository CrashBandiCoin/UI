import BigNumber from 'bignumber.js'
import { TeamConfig } from 'config/constants/types'

export interface TeamWithMoreValue extends TeamConfig {
  apy?: BigNumber
  liquidity?: BigNumber
}
