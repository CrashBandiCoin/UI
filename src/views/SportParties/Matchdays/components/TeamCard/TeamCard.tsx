import BigNumber from 'bignumber.js'
import { Team } from 'state/types'

export interface TeamWithMoreValue extends Team {
  apy?: BigNumber
  liquidity?: BigNumber
}
