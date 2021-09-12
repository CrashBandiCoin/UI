import BigNumber from 'bignumber.js'
import { Match } from 'state/types'

export interface MatchWithMoreValue extends Match {
  apy?: BigNumber
  liquidity?: BigNumber
}
