import { Matchday } from 'state/types'
import {  ChampionsLeagueToken } from './types'

const matchdays: Matchday[] = [
	{
	    id: 1,
	    label: 'day 1',
		matches:[
			{
				id:1,
				theDate: '12 Sept. 17:30 UTC',
				teams: [
					{
						id:1,
						label:'Atalanta',
						icon: 'atalanta',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 1,
					},
					{
						id:1,
						label:'Barcelona',
						icon: 'barcelona',
						score: 0,
					},
				],
			},
			{
				id:2,
				theDate: '12 Sept. 17:30 UTC',
				teams: [
					{
						id:1,
						label:'Bruges',
						icon: 'bruges',
						score: 2,
					},
					{
						id:1,
						label:'Manchester',
						icon: 'manchester',
						votedToken : ChampionsLeagueToken.TEASPORT,
						score: 3,
					},
				],
			},
		],

	},
	{
	    id: 2,
	    label: 'day 2',
		matches:[
			{
				id:1,
				theDate: '19 Sept. 18:30 UTC',
				teams: [
					{
						id:1,
						label:'Sheriff',
						icon: 'sheriff',
						votedToken : ChampionsLeagueToken.SUGAR,
					},
					{
						id:1,
						label:'Wolfsburg',
						icon: 'wolfsburg',
					},
				],
			},
			{
				id:2,
				theDate: '19 Sept. 20:50 UTC',
				teams: [
					{
						id:1,
						label:'Porto',
						icon: 'porto',
					},
					{
						id:1,
						label:'Lille',
						icon: 'lille',
						votedToken : ChampionsLeagueToken.TEASPORT,
					},
				],
			},
		],

	},
]


export default [...matchdays]