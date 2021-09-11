import { ChampionsLeagueToken } from 'config/constants/types'
import { Matchday } from 'state/types'

/**
 * Returns the first farm with a quote token that matches from an array of preferred quote tokens
 * @param matchdays Array of Matchday
 * @param choosenToken token choosen by user
 * @returns An array of Matchday forwhich the winner token is equal to the token choosen by the user
 */
export const filterMatchdaysByWinnerToken = (matchdays: Matchday[], choosenToken: ChampionsLeagueToken = ChampionsLeagueToken.SUGAR): Matchday[] => {
  
  return matchdays.filter( md => md.winnerToken === choosenToken )
}

export default filterMatchdaysByWinnerToken
