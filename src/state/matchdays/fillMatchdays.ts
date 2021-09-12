import BigNumber from 'bignumber.js'
import { BIG_ONE, BIG_ZERO } from 'utils/bigNumber'
import { filterMatchdaysByWinnerToken } from 'utils/matchdaysPriceHelpers'
import { Matchday, Match, Team } from 'state/types'
import { ChampionsLeagueToken } from 'config/constants/types'
 


const findWinnerToken = (matchday: Matchday ): ChampionsLeagueToken => {
  return ChampionsLeagueToken.SUGAR

}

const findMatchdayDate = (matchday: Matchday ): string => {
  return matchday.matches[0].matchDate

}
 
 
const fillMatchdays = (matchdays: Matchday[] ): Matchday[] => {

  const calculatedMatchdays = matchdays.map((matchday) => {

    // TODO TOM

 
    const winnerToken = findWinnerToken(matchday)

    const isActive = matchday.id % 2 === 0

    const theDate = findMatchdayDate(matchday)

    return { ...matchday, winnerToken, isActive, theDate }

  })

  return calculatedMatchdays

} 

  
export default fillMatchdays
