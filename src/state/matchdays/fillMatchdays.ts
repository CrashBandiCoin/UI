import { Matchday, Match, Team } from 'state/types'
import { ChampionsLeagueToken } from 'config/constants/types'
 


const findWinnerMatchdayToken = (matchday: Matchday ): ChampionsLeagueToken => {

  const nbSugarWinnerMatch = matchday.matches.reduce((acc,match) => {

    if (!match) return acc

    if (!match.winnerToken) return acc

    if ( match.winnerToken === ChampionsLeagueToken.SUGAR ) return acc+1

    return acc
  },0)


  const nbTeasportWinnerMatch = matchday.matches.reduce((acc,match) => {

    if (!match) return acc

    if (!match.winnerToken) return acc

    if ( match.winnerToken === ChampionsLeagueToken.TEASPORT ) return acc +1 

    return acc


  },0)
 
 
  return nbSugarWinnerMatch > nbTeasportWinnerMatch ? ChampionsLeagueToken.SUGAR: ChampionsLeagueToken.TEASPORT

}
 
const findTheWinnerTeam = (match: Match ): Team|null => {
  
  const theWinnerTeam:Team = match.teams.reduce((winner, team) => {

    if (!winner) return team

    if (!team) return winner

    if (!winner.score) return team

    if (!team.score) return winner

    return winner.score > team.score ? winner : team



  })

  return theWinnerTeam

}

const findMatchdayDate = (matchday: Matchday ): string => {
  return matchday.matches[0].theDate

}
 
 
const fillMatchdays = (matchdays: Matchday[] ): Matchday[] => {

  const calculatedMatchdays = matchdays.map((matchday) => {
 
    const isActive = matchday.id % 2 === 0

    const theDate = findMatchdayDate(matchday)

    const filledInMatches = matchday.matches.map ( match => {

    const theWinnerTeam:Team|null = findTheWinnerTeam(match)

    if ( theWinnerTeam ) {
        return {...match, winnerToken : theWinnerTeam.votedToken, theWinnerTeam}
    } else return {...match}

    })

    const winnerMatchdayToken = findWinnerMatchdayToken(matchday)


    return { ...matchday, matches: filledInMatches, winnerToken: winnerMatchdayToken, isActive, theDate }

  })

  return calculatedMatchdays

} 

  
export default fillMatchdays
