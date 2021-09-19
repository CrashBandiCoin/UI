import { Matchday, Match } from 'state/types'
import { ChampionsLeagueToken, MatchdayConfig, MatchConfig, TeamConfig } from 'config/constants/types'


const findWinnerMatchToken = (matchConfig: MatchConfig ): ChampionsLeagueToken => {

  const theWinnerTeam:TeamConfig = matchConfig.teams.reduce((winnerTeam,team) => {

    if (!team) return winnerTeam

    if (!winnerTeam) return team

    if ( team.score > winnerTeam.score ) return team

    if ( team.score < winnerTeam.score ) return winnerTeam

    return null
  })

  if ( !theWinnerTeam ) return ChampionsLeagueToken.DRAW

  return theWinnerTeam.votedToken

}

const findWinnerMatchdayToken = (matches: Match[] ): ChampionsLeagueToken => {
  const nbTeasportWinnerMatch = matches.reduce((acc,match) => {

    if (!match) return acc

    if (!match.winnerToken) return acc

    if ( match.winnerToken === ChampionsLeagueToken.TEASPORT ) return acc +1 

    return acc


  },0)

  const nbSugarWinnerMatch = matches.reduce((acc,match) => {

    if (!match) return acc

    if (!match.winnerToken) return acc

    if ( match.winnerToken === ChampionsLeagueToken.SUGAR ) return acc +1 

    return acc


  },0)
 
  if ( nbSugarWinnerMatch > nbTeasportWinnerMatch ) return ChampionsLeagueToken.SUGAR 

  if ( nbSugarWinnerMatch < nbTeasportWinnerMatch ) return ChampionsLeagueToken.TEASPORT 

  return ChampionsLeagueToken.DRAW

}
 


 

const fillInMatches = (matchesFromConfig: MatchConfig[] ): Match[] => {

  const filledMatches:Match[] = matchesFromConfig.map ( (matchFromConfig) => {

    
   

    let winnerToken:ChampionsLeagueToken|null = null

    if ( matchFromConfig.isDone ) { // If match is done ( finished )
  
      winnerToken = findWinnerMatchToken(matchFromConfig)
    }
  

  return {...matchFromConfig, winnerToken}


  })


  return filledMatches


}
 

const fillInMatchdays = (matchdays: MatchdayConfig[]): Matchday[] => {

  const matchdaysState = matchdays.map((matchdayConfig) => {
 
   
  const filledMatches:Match[] = fillInMatches(matchdayConfig.matches)

  let winnerToken:ChampionsLeagueToken|null = null

  if ( matchdayConfig.isDone ) { // If matchday isdone ( if all matches have been played )
  
    winnerToken = findWinnerMatchdayToken(filledMatches)
  }


  const matchdayState:Matchday = { ...matchdayConfig, winnerToken, filledMatches } 

  return matchdayState

  

  })


  return   matchdaysState
}
 
export default fillInMatchdays
