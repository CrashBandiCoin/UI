import BigNumber from 'bignumber.js'
import { Matchday } from 'state/types'

export interface MatchdayWithMoreValue extends Matchday {
  apy?: BigNumber
  liquidity?: BigNumber
}
