import {  MatchdayConfig, ChampionsLeagueToken } from './types'

const matchdays: MatchdayConfig[] = [
	{
	    id: 1,
	    label: 'Matchday 1 of 6',
		isDone: true,
	    theLabelDate: 'September 14 & 15, 2021',
		matches:[
			{
				id:1,
				type: 1,
				isDone: true,
				beginTime: 'September 14, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Séville',
						icon: 'seville',
                     				votedToken: ChampionsLeagueToken.TEASPORT,
						score: 1,
					},
					{
						id:2,
						label:'RB Salzburg',
						icon: 'salzburg',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 1,					
					},
				],
			},
			{
				id:2,
				type: 1,
				isDone: true,
				beginTime: 'September 14, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Young Boys',
						icon: 'youngboys',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 2,
						
					},
					{
						id:2,
						label:'Manchester United',
						icon: 'manchester',
 				                votedToken: ChampionsLeagueToken.TEASPORT,	
						score: 1,		
					},
				],
			},
			{
				id:3,
				type: 1,
				isDone: true,
				beginTime: 'September 14, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Lille',
						icon: 'lille',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 0,	
					},
					{
						id:2,
						label:'Wolfsbourg',
						icon: 'wolfsburg',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 0,
					},
				],
			},
			{
				id:4,
				type: 1,
				isDone: true,
				beginTime: 'September 14, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Villarreal',
						icon: 'villarreal',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 2,
					},
					{
						id:2,
						label:'Atalanta',
						icon: 'atalanta',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 2,						
					},
				],
			},
			{
				id:5,
				type: 2,
				isDone: true,
				beginTime: 'September 14, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Chelsea',
						icon: 'chelsea',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 1,
					},
					{
						id:2,
						label:'Zenit',
						icon: 'zenit',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 0,
					},
				],
			},
			{
				id:6,
				type: 2,
				isDone: true,
				beginTime: 'September 14, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Malmö',
						icon: 'malmö',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 0,
					},
					{
						id:2,
						label:'Juventus',
						icon: 'juventus',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 3,
					},
				],
			},
			{
				id:7,
				type: 3,
				isDone: true,
				beginTime: 'September 14, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Barcelona',
						icon: 'barcelona',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 0,
					},
					{
						id:2,
						label:'Bayern',
						icon: 'bayern',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 3,
					},
				],
			},
			{
				id:8,
				type: 3,
				isDone: true,
				beginTime: 'September 14, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Dynamo Kyiv',
						icon: 'dynamo',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 0,											
					},
					{
						id:2,
						label:'Benfica',
						icon: 'benfica',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 0,
					},
				],
			},
			{
				id:9,
				type: 1,
				isDone: true,
				beginTime: 'September 15, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Beşiktaş',
						icon: 'besiktas',
						votedToken: ChampionsLeagueToken.SUGAR,
						score: 1,
					},
					{
						id:2,
						label:'Dortmund',
						icon: 'dortmund',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 2,
					},
				],
			},
			{
				id:10,
				type: 1,
				isDone: true,
				beginTime: 'September 15, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Sheriff',
						icon: 'sheriff',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 2,
					},
					{
						id:2,
						label:'Chakthar',
						icon: 'chakhtar',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 0,
					},
				],
			},
			{
				id:11,
				type: 1,
				isDone: true,
				beginTime: 'September 15, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Inter',
						icon: 'inter',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 0,
					},
					{
						id:2,
						label:'Real',
						icon: 'real',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 1,
					},
				],
			},
			{
				id:12,
				type: 1,
				isDone: true,
				beginTime: 'September 15, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Atélico Madrid',
						icon: 'atletico',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 0,
					},
					{
						id:2,
						label:'Porto',
						icon: 'porto',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 0,
					},
				],
			},
			{
				id:13,
				type: 2,
				isDone: true,
				beginTime: 'September 15, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'FC Bruges',
						icon: 'bruges',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 1,
					},
					{
						id:2,
						label:'Paris Saint-Germain',
						icon: 'paris',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 1,
					},
				],
			},
			{
				id:14,
				type: 2,
				isDone: true,
				beginTime: 'September 15, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Liverpool',
						icon: 'liverpool',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 3,
					},
					{
						id:2,
						label:'Milan',
						icon: 'milan',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 2,
					},
				],
			},
			{
				id:15,
				type: 3,
				isDone: true,
				beginTime: 'September 15, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Man City',
						icon: 'mancity',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 6,
					},
					{
						id:2,
						label:'Leipzig',
						icon: 'leipzig',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 3,
					},
				],
			},
			{
				id:16,
				type: 3,
				isDone: true,
				beginTime: 'September 15, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Sporting',
						icon: 'sporting',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 1,
					},
					{
						id:2,
						label:'Ajax',
						icon: 'ajax',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 5,
					},
				],
			},
		],
	},
	{
	    id: 2,
	    label: 'Matchday 2 of 6',
		isDone: true,
    	theLabelDate: 'September 28 & 29, 2021',
		matches:[
			{
				id:1,
				type: 1,
				isDone: true,
				beginTime: 'September 28, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Chakthar',
						icon: 'chakhtar',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 0,
					},
					{
						id:2,
						label:'Inter',
						icon: 'inter',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 0,
					},
				],
			},
			{
				id:2,
				type: 1,
				isDone: true,
				beginTime: 'September 28, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Ajax',
						icon: 'ajax',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 2,
					},
					{
						id:2,
						label:'Beşiktaş',
						icon: 'besiktas',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 0,
					},
				],
			},
			{
				id:3,
				type: 1,
				isDone: true,
				beginTime: 'September 28, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Real',
						icon: 'real',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 1,
					},
					{
						id:2,
						label:'Sheriff',
						icon: 'sheriff',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 2,
					},
				],
			},
            {
				id: 4,
				type: 1,
				isDone: true,
				beginTime: 'September 28, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Milan',
						icon: 'milan',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 1,
					},
					{
						id:2,
						label:'Atélico Madrid',
						icon: 'atletico',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 2,
					},
				],
			},
            {
				id: 5,
				type: 2,
				isDone: true,
				beginTime: 'September 28, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Dortmund',
						icon: 'dortmund',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 1,
					},
					{
						id:2,
						label:'Sporting',
						icon: 'sporting',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 0,
					},
				],
			},
            {
				id: 6,
				type: 2,
				isDone: true,
				beginTime: 'September 28, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Man City',
						icon: 'mancity',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 0,
					},
					{
						id:2,
						label:'Paris Saint-Germain',
						icon: 'paris',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 2,
					},
				],
			},
            {
				id: 7,
				type: 3,
				isDone: true,
				beginTime: 'September 28, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Porto',
						icon: 'porto',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 1,
					},
					{
						id:2,
						label:'Liverpool',
						icon: 'liverpool',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 5,
					},
				],
			},
            {
				id: 8,
				type: 3,
				isDone: true,
				beginTime: 'September 28, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'RB Leipzig',
						icon: 'leipzig',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 1,
					},
					{
						id:2,
						label:'FC Bruges',
						icon: 'bruges',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 2,
					},
				],
			},
            {
				id: 9,
				type: 1,
				isDone: true,
				beginTime: 'September 29, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Atalanta',
						icon: 'atalanta',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 1,
					},
					{
						id:2,
						label:'Young Boys',
						icon: 'youngboys',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 0,
					},
				],
			},
            {
				id: 10,
				type: 1,
				isDone: true,
				beginTime: 'September 29, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Zenit',
						icon: 'zenit',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 4,
					},
					{
						id:2,
						label:'Malmö',
						icon: 'malmö',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 0,
					},
				],
			},
            {
				id: 11,
				type: 1,
				isDone: true,
				beginTime: 'September 29, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Wolfsbourg',
						icon: 'wolfsburg',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 1,
					},
					{
						id:2,
						label:'Séville',
						icon: 'seville',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 1,
					},
				],
			},
            {
				id: 12,
				type: 1,
				isDone: true,
				beginTime: 'September 29, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Bayern',
						icon: 'bayern',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 5,
					},
					{
						id:2,
						label:'Dynamo Kyiv',
						icon: 'dynamo',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 0,
					},
				],
			},
            {
				id: 13,
				type: 1,
				isDone: true,
				beginTime: 'September 29, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'RB Salsburg',
						icon: 'salzburg',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 2,
					},
					{
						id:2,
						label:'Lille',
						icon: 'lille',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 1,
					},
				],
			},
            {
				id: 14,
				type: 2,
				isDone: true,
				beginTime: 'September 29, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Juventus',
						icon: 'juventus',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 1,
					},
					{
						id:2,
						label:'Chelsea',
						icon: 'chelsea',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 0,
					},
				],
			},
            {
				id: 15,
				type: 3,
				isDone: true,
				beginTime: 'September 29, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Benfica',
						icon: 'benfica',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 3,
					},
					{
						id:2,
						label:'Barcelona',
						icon: 'barcelona',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 0,
					},
				],
			},
            {
				id: 16,
				type: 3,
				isDone: true,
				beginTime: 'September 29, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Manchester United',
						icon: 'manchester',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 2,
					},
					{
						id:2,
						label:'Villarreal',
						icon: 'villarreal',
						votedToken : ChampionsLeagueToken.SUGAR,
						score: 1,
					},
				],
			},
		],
	},
	{
	    id: 3,
	    label: 'Matchday 3 of 6',
		isDone: true,
        theLabelDate: 'October 19 & 20, 2021',
		matches:[
			{
				id:1,
				type: 1,
				beginTime: 'October 19, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Beşiktaş',
						icon: 'besiktas',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 1,

						
					},
					{
						id:2,
						label:'Sporting',
						icon: 'sporting',
						votedToken: ChampionsLeagueToken.SUGAR,
						score: 4,
					},
				],
			},
			{
				id:2,
				type: 1,
				beginTime: 'October 19, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'FC Bruges',
						icon: 'bruges',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 1,
					},
					{
						id:2,
						label:'Man City',
						icon: 'mancity',
						votedToken: ChampionsLeagueToken.SUGAR,
						score: 5,
					},
				],
			},
			{
				id:3,
				type: 1,
				beginTime: 'October 19, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Chakthar',
						icon: 'chakhtar',
						votedToken: ChampionsLeagueToken.SUGAR,
						score: 0,
					},
					{
						id:2,
						label:'Real',
						icon: 'real',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 5,
					},
				],
			},
            {
				id: 4,
				type: 1,
				beginTime: 'October 19, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Paris Saint-Germain',
						votedToken: ChampionsLeagueToken.TEASPORT,
						icon: 'paris',
						score: 3,
					},
					{
						id:2,
						label:'RB Leipzig',
						icon: 'leipzig',
						votedToken: ChampionsLeagueToken.SUGAR,
						score: 2,
					},
				],
			},
            {
				id: 5,
				type: 2,
				beginTime: 'October 19, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Atlético Madrid',
						icon: 'atletico',
						votedToken: ChampionsLeagueToken.SUGAR,
						score: 2,

					},
					{
						id:2,
						label:'Liverpool',
						icon: 'liverpool',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 3,
					},
				],
			},
            {
				id: 6,
				type: 2,
				beginTime: 'October 19, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Inter',
						icon: 'inter',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 3,
					},
					{
						id:2,
						label:'Sheriff',
						icon: 'Sheriff',
						votedToken: ChampionsLeagueToken.SUGAR,
						score: 1,
					},
				],
			},
            {
				id: 7,
				type: 3,
				beginTime: 'October 19, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Ajax',
						icon: 'ajax',
						votedToken: ChampionsLeagueToken.SUGAR,
						score: 4,
					},
					{
						id:2,
						label:'Dortmund',
						icon: 'dortmund',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 0,
					},
				],
			},
            {
				id: 8,
				type: 3,
				beginTime: 'October 19, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Porto',
						icon: 'porto',
						votedToken: ChampionsLeagueToken.SUGAR,
						score: 1,
					},
					{
						id:2,
						label:'Milan',
						icon: 'milan',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 0,
					},
				],
			},
            {
				id: 9,
				type: 1,
				beginTime: 'October 20, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'RB Salzburg',
						icon: 'salzburg',
						votedToken: ChampionsLeagueToken.SUGAR,
						score: 3,
					},
					{
						id:2,
						label:'Wolfsbourg',
						icon: 'wolfsburg',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 1,
					},
				],
			},
            {
				id: 10,
				type: 1,
				beginTime: 'October 20, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Barcelona',
						icon: 'barcelona',
						votedToken: ChampionsLeagueToken.SUGAR,
						score: 1,
					},
					{
						id:2,
						label:'Dynamo Kyiv',
						icon: 'dynamo',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 0,
					},
				],
			},
            {
				id: 11,
				type: 1,
				beginTime: 'October 20, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Lille',
						icon: 'lille',
						votedToken: ChampionsLeagueToken.SUGAR,
						score: 0,
					},
					{
						id:2,
						label:'Séville',
						icon: 'seville',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 0,
					},
				],
			},
            {
				id: 12,
				type: 1,
				beginTime: 'October 20, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Manchester United',
						icon: 'manchester',
						votedToken: ChampionsLeagueToken.SUGAR,
						score: 3,
					},
					{
						id:2,
						label:'Atalanta',
						icon: 'atalanta',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 2,
					},
				],
			},
            {
				id: 13,
				type: 2,
				beginTime: 'October 20, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Zenit',
						icon: 'zenit',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 0,
					},
					{
						id:2,
						label:'Juventus',
						icon: 'juventus',
						votedToken: ChampionsLeagueToken.SUGAR,
						score: 1,
					},
				],
			},
            {
				id: 14,
				type: 2,
				beginTime: 'October 20, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Benfica',
						icon: 'benfica',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 0,
					},
					{
						id:2,
						label:'Bayern',
						icon: 'bayern',
						votedToken: ChampionsLeagueToken.SUGAR,
						score: 4,
					},
				],
			},
            {
				id: 15,
				type: 3,
				beginTime: 'October 20, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Chelsea',
						icon: 'chelsea',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 4,
					},
					{
						id:2,
						label:'Malmö',
						icon: 'Malmö',
						votedToken: ChampionsLeagueToken.SUGAR,
						score: 0,
					},
				],
			},
            {
				id: 16,
				type: 3,
				beginTime: 'October 20, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Young Boys',
						icon: 'youngboys',
						votedToken: ChampionsLeagueToken.SUGAR,
						score: 1,
					},
					{
						id:2,
						label:'Villarreal',
						icon: 'villarreal',
						votedToken: ChampionsLeagueToken.TEASPORT,
						score: 4,
					},
				],
			},
		],
	},
	{
	    id: 4,
	    label: 'Matchday 4 of 6',
        theLabelDate: 'November 2 & 3, 2021',
		matches:[
			{
				id:1,
				type: 1,
				beginTime: 'November 2, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Malmö',
						icon: 'malmö',
						
					},
					{
						id:2,
						label:'Chelsea',
						icon: 'chelsea',
					},
				],
			},
			{
				id:2,
				type: 1,
				beginTime: 'November 2, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Wolfsbourg',
						icon: 'wolfsburg',
					},
					{
						id:2,
						label:'RB Salzburg',
						icon: 'salzburg',
					},
				],
			},
			{
				id:3,
				type: 1,
				beginTime: 'November 2, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Villarreal',
						icon: 'villarreal',
					},
					{
						id:2,
						label:'Young Boys',
						icon: 'youngboys',
					},
				],
			},
            {
				id: 4,
				type: 1,
				beginTime: 'November 2, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Juventus',
						icon: 'juventus',
					},
					{
						id:2,
						label:'Zenit',
						icon: 'zenit',
					},
				],
			},
            {
				id: 5,
				type: 2,
				beginTime: 'November 2, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Bayern',
						icon: 'bayern',
					},
					{
						id:2,
						label:'Benfica',
						icon: 'benfica',
					},
				],
			},
            {
				id: 6,
				type: 2,
				beginTime: 'November 2, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Séville',
						icon: 'seville',
					},
					{
						id:2,
						label:'Lille',
						icon: 'lille',
					},
				],
			},
            {
				id: 7,
				type: 3,
				beginTime: 'November 2, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Dynamo Kyiv',
						icon: 'dynamo',
					},
					{
						id:2,
						label:'Barcelona',
						icon: 'barcelona',
					},
				],
			},
            {
				id: 8,
				type: 3,
				beginTime: 'November 2, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Atalanta',
						icon: 'atalanta',
					},
					{
						id:2,
						label:'Manchester United',
						icon: 'manchester',
					},
				],
			},
            {
				id: 9,
				type: 1,
				beginTime: 'Wednesday, Nov 3, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Real',
						icon: 'real',
					},
					{
						id:2,
						label:'Chakthar',
						icon: 'chakhtar',
					},
				],
			},
            {
				id: 10,
				type: 1,
				beginTime: 'Wednesday, Nov 3, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Milan',
						icon: 'milan',
					},
					{
						id:2,
						label:'Porto',
						icon: 'porto',
					},
				],
			},
            {
				id: 11,
				type: 1,
				beginTime: 'Wednesday, Nov 3, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Sporting',
						icon: 'sporting',
					},
					{
						id:2,
						label:'Beşiktaş',
						icon: 'besiktas',
					},
				],
			},
            {
				id: 12,
				type: 1,
				beginTime: 'Wednesday, Nov 3, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Dortmund',
						icon: 'dortmund',
					},
					{
						id:2,
						label:'Ajax',
						icon: 'ajax',
					},
				],
			},
            {
				id: 13,
				type: 2,
				beginTime: 'Wednesday, Nov 3, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Sheriff',
						icon: 'sheriff',
					},
					{
						id:2,
						label:'Inter',
						icon: 'inter',
					},
				],
			},
            {
				id: 14,
				type: 2,
				beginTime: 'Wednesday, Nov 3, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Liverpool',
						icon: 'liverpool',
					},
					{
						id:2,
						label:'Atlético Madrid',
						icon: 'atletico',
					},
				],
			},
            {
				id: 15,
				type: 3,
				beginTime: 'Wednesday, Nov 3, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Man City',
						icon: 'mancity',
					},
					{
						id:2,
						label:'FC Bruges',
						icon: 'bruges',
					},
				],
			},
            {
				id: 16,
				type: 3,
				beginTime: 'Wednesday, Nov 3, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'RB Leipzig',
						icon: 'leipzig',
					},
					{
						id:2,
						label:'Paris Saint-Germain',
						icon: 'paris',
					},
				],
			},
		],
	},
	{
	    id: 5,
	    label: 'Matchday 5 of 6',
        theLabelDate: 'November 23 & 24, 2021',
		matches:[
			{
				id:1,
				type: 1,
				beginTime: 'November 23, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Dynamo Kyiv',
						icon: 'dynamo',
						
					},
					{
						id:2,
						label:'Bayern',
						icon: 'bayern',
					},
				],
			},
			{
				id:2,
				type: 1,
				beginTime: 'November 23, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Villarreal',
						icon: 'villarreal',
					},
					{
						id:2,
						label:'Manchester United',
						icon: 'manchester',
					},
				],
			},
			{
				id:3,
				type: 1,
				beginTime: 'November 23, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Chelsea',
						icon: 'chelsea',
					},
					{
						id:2,
						label:'Juventus',
						icon: 'juventus',
					},
				],
			},
            {
				id: 4,
				type: 1,
				beginTime: 'November 23, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Barcelona',
						icon: 'barcelona',
					},
					{
						id:2,
						label:'Benfica',
						icon: 'benfica',
					},
				],
			},
            {
				id: 5,
				type: 2,
				beginTime: 'November 23, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Séville',
						icon: 'seville',
					},
					{
						id:2,
						label:'Wolfsbourg',
						icon: 'wolfsburg',
					},
				],
			},
            {
				id: 6,
				type: 2,
				beginTime: 'November 23, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Malmö',
						icon: 'malmö',
					},
					{
						id:2,
						label:'Zenit',
						icon: 'zenit',
					},
				],
			},
            {
				id: 7,
				type: 3,
				beginTime: 'November 23, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Lille',
						icon: 'lille',
					},
					{
						id:2,
						label:'RB Salzburg',
						icon: 'salzburg',
					},
				],
			},
            {
				id: 8,
				type: 3,
				beginTime: 'November 23, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Young Boys',
						icon: 'youngboys',
					},
					{
						id:2,
						label:'Atalanta',
						icon: 'atalanta',
					},
				],
			},
            {
				id: 9,
				type: 1,
				beginTime: 'Wednesday, Nov 24, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Beşiktaş',
						icon: 'besiktas',
					},
					{
						id:2,
						label:'Ajax',
						icon: 'Ajax',
					},
				],
			},
            {
				id: 10,
				type: 1,
				beginTime: 'Wednesday, Nov 24, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Inter',
						icon: 'inter',
					},
					{
						id:2,
						label:'Chakdhar',
						icon: 'chakhdar',
					},
				],
			},
            {
				id: 11,
				type: 1,
				beginTime: 'Wednesday, Nov 24, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Sporting',
						icon: 'sporting',
					},
					{
						id:2,
						label:'Dortmund',
						icon: 'dortmund',
					},
				],
			},
            {
				id: 12,
				type: 1,
				beginTime: 'Wednesday, Nov 24, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Man City',
						icon: 'mancity',
					},
					{
						id:2,
						label:'Paris Saint-Germain',
						icon: 'paris',
					},
				],
			},
            {
				id: 13,
				type: 2,
				beginTime: 'Wednesday, Nov 24, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Atlético',
						icon: 'atletico',
					},
					{
						id:2,
						label:'Milan',
						icon: 'milan',
					},
				],
			},
            {
				id: 14,
				type: 2,
				beginTime: 'Wednesday, Nov 24, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Liverpool',
						icon: 'liverpool',
					},
					{
						id:2,
						label:'Porto',
						icon: 'porto',
					},
				],
			},
            {
				id: 15,
				type: 3,
				beginTime: 'Wednesday, Nov 24, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'FC Bruges',
						icon: 'bruges',
					},
					{
						id:2,
						label:'RB Leipzig',
						icon: 'leipzig',
					},
				],
			},
            {
				id: 16,
				type: 3,
				beginTime: 'Wednesday, Nov 24, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Sheriff',
						icon: 'sheriff',
					},
					{
						id:2,
						label:'Real',
						icon: 'real',
					},
				],
			},
		],
	},
	{
	    id: 6,
	    label: 'Matchday 6 of 6',
        theLabelDate: 'December 7 & 8, 2021',
		matches:[
			{
				id:1,
				type: 1,
				beginTime: 'Tuesday, Dec 7, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'RB Leipzig',
						icon: 'leipzig',
						
					},
					{
						id:2,
						label:'Man City',
						icon: 'mancity',
					},
				],
			},
			{
				id:2,
				type: 1,
				beginTime: 'Tuesday, Dec 7, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Paris Saint-Germain',
						icon: 'paris',
					},
					{
						id:2,
						label:'FC Bruges',
						icon: 'bruges',
					},
				],
			},
			{
				id:3,
				type: 1,
				beginTime: 'Tuesday, Dec 7, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Ajax',
						icon: 'ajax',
					},
					{
						id:2,
						label:'Sporting',
						icon: 'sporting',
					},
				],
			},
            {
				id: 4,
				type: 1,
				beginTime: 'Tuesday, Dec 7, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Porto',
						icon: 'porto',
					},
					{
						id:2,
						label:'Atélico Madrid',
						icon: 'atletico',
					},
				],
			},
            {
				id: 5,
				type: 2,
				beginTime: 'Tuesday, Dec 7, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Real',
						icon: 'real',
					},
					{
						id:2,
						label:'Inter',
						icon: 'inter',
					},
				],
			},
            {
				id: 6,
				type: 2,
				beginTime: 'Tuesday, Dec 7, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Milan',
						icon: 'milan',
					},
					{
						id:2,
						label:'Liverpool',
						icon: 'liverpool',
					},
				],
			},
            {
				id: 7,
				type: 3,
				beginTime: 'Tuesday, Dec 7, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Chakhdar',
						icon: 'chakhdar',
					},
					{
						id:2,
						label:'Sheriff',
						icon: 'sheriff',
					},
				],
			},
            {
				id: 8,
				type: 3,
				beginTime: 'Tuesday, Dec 7, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Dortmund',
						icon: 'dortmund',
					},
					{
						id:2,
						label:'Beşiktaş',
						icon: 'besiktas',
					},
				],
			},
            {
				id: 9,
				type: 1,
				beginTime: 'Wednesday, Dec 8, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Zenit',
						icon: 'zenit',
					},
					{
						id:2,
						label:'Chelsea',
						icon: 'Chelsea',
					},
				],
			},
            {
				id: 10,
				type: 1,
				beginTime: 'Wednesday, Dec 8, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Juventus',
						icon: 'juventus',
					},
					{
						id:2,
						label:'Malmö',
						icon: 'malmö',
					},
				],
			},
            {
				id: 11,
				type: 1,
				beginTime: 'Wednesday, Dec 8, 2021 18:45:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Benfica',
						icon: 'benfica',
					},
					{
						id:2,
						label:'Dynamo Kyiv',
						icon: 'dynamo',
					},
				],
			},
            {
				id: 12,
				type: 1,
				beginTime: 'Wednesday, Dec 8, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Atalanta',
						icon: 'atalanta',
					},
					{
						id:2,
						label:'Villarreal',
						icon: 'villarreal',
					},
				],
			},
            {
				id: 13,
				type: 2,
				beginTime: 'Wednesday, Dec 8, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Wolfsbourg',
						icon: 'wolfsburg',
					},
					{
						id:2,
						label:'Lille',
						icon: 'lille',
					},
				],
			},
            {
				id: 14,
				type: 2,
				beginTime: 'Wednesday, Dec 8, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'RB Salzburg',
						icon: 'salzburg',
					},
					{
						id:2,
						label:'Séville',
						icon: 'seville',
					},
				],
			},
            {
				id: 15,
				type: 3,
				beginTime: 'Wednesday, Dec 8, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Manchester United',
						icon: 'manchester',
					},
					{
						id:2,
						label:'Young Boys',
						icon: 'youngboys',
					},
				],
			},
            {
				id: 16,
				type: 3,
				beginTime: 'Wednesday, Dec 8, 2021 21:00:00 GMT+2:00',
				teams: [
					{
						id:1,
						label:'Bayern',
						icon: 'bayern',
					},
					{
						id:2,
						label:'Barcelona',
						icon: 'barcelona',
					},
				],
			},
		],
	},

]


export default [...matchdays]