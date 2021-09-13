import { Matchday } from 'state/types'
import {  ChampionsLeagueToken } from './types'

const matchdays: Matchday[] = [
	{
	    id: 1,
	    label: 'day 1',
		matches:[
			{
				id:1,
				theDate: 'Tuesday Sept 14, 4:45 pm UTC',
				teams: [
					{
						id:1,
						label:'Sevilla',
						icon: 'sevilla',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 1,
					},
					{
						id:1,
						label:'RB SALZBURG',
						icon: 'salzburg',
						score: 0,
					},
				],
			},
			{
				id:2,
				theDate: 'Tuesday Sept 14, 4:45 pm UTC',
				teams: [
					{
						id:1,
						label:'YOUNG BOYS',
						icon: 'youngboys',
						score: 2,
					},
					{
						id:1,
						label:'MANCHESTER UNITED',
						icon: 'manchester',
						votedToken : ChampionsLeagueToken.TEASPORT,
						score: 3,
					},
				],
			},
			{
				id:3,
				theDate: 'Tuesday Sept 14, 7:00 pm UTC',
				teams: [
					{
						id:1,
						label:'LILLE',
						icon: 'lille',
						score: 2,
					},
					{
						id:1,
						label:'WOLFSBURG',
						icon: 'wolfsburg',
						votedToken : ChampionsLeagueToken.TEASPORT,
						score: 3,
					},
				],
			},
			{
				id:4,
				theDate: 'Tuesday Sept 14, 7:00 pm UTC',
				teams: [
					{
						id:1,
						label:'VILLARREAL',
						icon: 'villarreal',
						score: 2,
					},
					{
						id:1,
						label:'ATLANTA',
						icon: 'atlanta',
						votedToken : ChampionsLeagueToken.TEASPORT,
						score: 3,
					},
				],
			},
			{
				id:5,
				theDate: 'Tuesday Sept 14, 7:00 pm UTC',
				teams: [
					{
						id:1,
						label:'CHELSEA',
						icon: 'chelsea',
					},
					{
						id:1,
						label:'ZENIT',
						icon: 'zenit',
					},
				],
			},
			{
				id:6,
				theDate: 'Tuesday Sept 14, 7:00 pm UTC',
				teams: [
					{
						id:1,
						label:'MAMÖ',
						icon: 'mamo',
					},
					{
						id:1,
						label:'JUVENTUS',
						icon: 'juventus',
					},
				],
			},
			{
				id:7,
				theDate: 'Tuesday Sept 14, 7:00 pm UTC',
				teams: [
					{
						id:1,
						label:'BARCELONA',
						icon: 'barcelona',
					},
					{
						id:1,
						label:'BAYERN',
						icon: 'bayern',
					},
				],
			},
			{
				id:8,
				theDate: 'Tuesday Sept 14, 7:00 pm UTC',
				teams: [
					{
						id:1,
						label:'DYNAMO KYIV',
						icon: 'dynamo',
						score: 4,
						votedToken: ChampionsLeagueToken.TEASPORT,
						
					},
					{
						id:1,
						label:'BENFICA',
						icon: 'benfica',
						score: 2,
					},
				],
			},
			{
				id:9,
				theDate: 'Wed, Sept 15, 4:45 pm UTC',
				teams: [
					{
						id:1,
						label:'BESIKTAS',
						icon: 'besiktas',
					},
					{
						id:1,
						label:'DORTMUND',
						icon: 'dortmund',
					},
				],
			},
			{
				id:10,
				theDate: 'Wed, Sept 15, 4:45 pm UTC',
				teams: [
					{
						id:1,
						label:'SHERIFF',
						icon: 'sheriff',
					},
					{
						id:1,
						label:'CHAKHTAR',
						icon: 'chakhtar',
					},
				],
			},
			{
				id:11,
				theDate: 'Wed, Sept 15, 7:00 pm UTC',
				teams: [
					{
						id:1,
						label:'INTER',
						icon: 'inter',
					},
					{
						id:1,
						label:'REAL',
						icon: 'real',
					},
				],
			},
			{
				id:12,
				theDate: 'Wed, Sept 15, 7:00 pm UTC',
				teams: [
					{
						id:1,
						label:'ATLETICO MADRID',
						icon: 'atletico',
					},
					{
						id:1,
						label:'PORTO',
						icon: 'porto',
					},
				],
			},
			{
				id:13,
				theDate: 'Wed, Sept 15, 7:00 pm UTC',
				teams: [
					{
						id:1,
						label:'FC BRUGES',
						icon: 'bruges',
					},
					{
						id:1,
						label:'PARIS SAINT-GERMAIN',
						icon: 'paris',
					},
				],
			},
			{
				id:14,
				theDate: 'Wed, Sept 15, 7:00 pm UTC',
				teams: [
					{
						id:1,
						label:'LIVERPOOL',
						icon: 'liverpool',
					},
					{
						id:1,
						label:'MILAN',
						icon: 'milan',
					},
				],
			},
			{
				id:15,
				theDate: 'Wed, Sept 15, 7:00 pm UTC',
				teams: [
					{
						id:1,
						label:'MAN CITY',
						icon: 'mancity',
					},
					{
						id:1,
						label:'LEIPZIG',
						icon: 'leipzig',
					},
				],
			},
			{
				id:16,
				theDate: 'Wed, Sept 15, 7:00 pm UTC',
				teams: [
					{
						id:1,
						label:'SPORTING',
						icon: 'sporting',
					},
					{
						id:1,
						label:'AJAX',
						icon: 'ajax',
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
				theDate: 'Tuesday Sept 28, 4:45 pm UTC',
				teams: [
					{
						id:1,
						label:'CHAKHTAR',
						icon: 'chakhtar',
						votedToken : ChampionsLeagueToken.SUGAR,
					},
					{
						id:2,
						label:'INTER',
						icon: 'inter',
					},
				],
			},
			{
				id:2,
				theDate: 'Tuesday Sept 28, 4:45 pm UTC',
				teams: [
					{
						id:1,
						label:'AJAX',
						icon: 'ajax',
						votedToken : ChampionsLeagueToken.SUGAR,
					},
					{
						id:2,
						label:'BESIKTAS',
						icon: 'besiktas',
					},
				],
			},
			{
				id:3,
				theDate: 'Tuesday Sept 28, 7:00 pm UTC',
				teams: [
					{
						id:1,
						label:'REAL',
						icon: 'ajax',
					},
					{
						id:2,
						label:'SHERIFF',
						icon: 'sheriff',
					},
				],
			},
		],

	},
]


export default [...matchdays]