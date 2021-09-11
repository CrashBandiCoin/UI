import BigNumber from 'bignumber.js'
import { BIG_ONE, BIG_ZERO } from 'utils/bigNumber'
import { filterMatchdaysByWinnerToken } from 'utils/matchdaysPriceHelpers'
import { Matchday, Match, Team } from 'state/types'
import { ChampionsLeagueToken } from 'config/constants/types'
 


const calculeWinnerToken = (matchday: Matchday ): ChampionsLeagueToken => {


  return ChampionsLeagueToken.SUGAR




}

 
const fillMatchdays = (matchdays: Matchday[] ): Matchday[] => {



  const calculatedMatchdays = matchdays.map((matchday) => {

    // TODO TOM


 
    const winnerToken = calculeWinnerToken(matchday)

    return { ...matchday, winnerToken }

  })

  return calculatedMatchdays

} 



  
export default fillMatchdays
