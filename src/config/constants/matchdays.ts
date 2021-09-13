import { Matchday } from 'state/types'
import { ChampionsLeagueToken } from './types'

const matchdays: Matchday[] = [
	{
	    id: 1,
	    label: 'Matchday 1 of 6',
		matches:[
			{
				id:1,
				theDate: 'Tuesday, Sept 14, 4:45 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Séville',
						icon: 'seville',
					},
					{
						id:1,
						label:'RB Salzburg',
						icon: 'salzburg',
						score: 2
						
					},
				],
			},
			{
				id:2,
				theDate: 'Tuesday, Sept 14, 4:45 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Young Boys',
						icon: 'youngboys',
						
					},
					{
						id:1,
						label:'Manchester United',
						icon: 'manchester',			
					},
				],
			},
			{
				id:3,
				theDate: 'Tuesday, Sept 14, 7:00 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Lille',
						icon: 'lille',
						
					},
					{
						id:1,
						label:'Wolfsbourg',
						icon: 'wolfsburg',
					},
				],
			},
			{
				id:4,
				theDate: 'Tuesday, Sept 14, 7:00 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Villarreal',
						icon: 'villarreal',
						
					},
					{
						id:1,
						label:'Atalanta',
						icon: 'atalanta',						
					},
				],
			},
			{
				id:5,
				theDate: 'Tuesday, Sept 14, 7:00 pm UTC (Type 2)',
				teams: [
					{
						id:1,
						label:'Chelsea',
						icon: 'chelsea',
					},
					{
						id:1,
						label:'Zenit',
						icon: 'zenit',
					},
				],
			},
			{
				id:6,
				theDate: 'Tuesday, Sept 14, 7:00 pm UTC (Type 2)',
				teams: [
					{
						id:1,
						label:'Malmö',
						icon: 'malmö',
					},
					{
						id:1,
						label:'Juventus',
						icon: 'juventus',
					},
				],
			},
			{
				id:7,
				theDate: 'Tuesday, Sept 14, 7:00 pm UTC (Type 3)',
				teams: [
					{
						id:1,
						label:'Barcelona',
						icon: 'barcelona',
					},
					{
						id:1,
						label:'Bayern',
						icon: 'bayern',
					},
				],
			},
			{
				id:8,
				theDate: 'Tuesday, Sept 14, 7:00 pm UTC (Type 3)',
				teams: [
					{
						id:1,
						label:'Dynamo Kyiv',
						icon: 'dynamo',
						
												
					},
					{
						id:1,
						label:'Benfica',
						icon: 'benfica',
						
					},
				],
			},
			{
				id:9,
				theDate: 'Wednesday, Sept 15, 4:45 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Beşiktaş',
						icon: 'besiktas',
					},
					{
						id:1,
						label:'Dortmund',
						icon: 'dortmund',
					},
				],
			},
			{
				id:10,
				theDate: 'Wednesday, Sept 15, 4:45 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Sheriff',
						icon: 'sheriff',
					},
					{
						id:1,
						label:'Chakthar',
						icon: 'chakhtar',
					},
				],
			},
			{
				id:11,
				theDate: 'Wednesday, Sept 15, 7:00 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Inter',
						icon: 'inter',
					},
					{
						id:1,
						label:'Real',
						icon: 'real',
					},
				],
			},
			{
				id:12,
				theDate: 'Wednesday, Sept 15, 7:00 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Atélico Madrid',
						icon: 'atletico',
					},
					{
						id:1,
						label:'Porto',
						icon: 'porto',
					},
				],
			},
			{
				id:13,
				theDate: 'Wednesday, Sept 15, 7:00 pm UTC (Type 2)',
				teams: [
					{
						id:1,
						label:'FC Bruges',
						icon: 'bruges',
					},
					{
						id:1,
						label:'Paris Saint-Germain',
						icon: 'paris',
					},
				],
			},
			{
				id:14,
				theDate: 'Wednesday, Sept 15, 7:00 pm UTC (Type 2)',
				teams: [
					{
						id:1,
						label:'Liverpool',
						icon: 'liverpool',
					},
					{
						id:1,
						label:'Milan',
						icon: 'milan',
					},
				],
			},
			{
				id:15,
				theDate: 'Wednesday, Sept 15, 7:00 pm UTC (Type 3)',
				teams: [
					{
						id:1,
						label:'Man City',
						icon: 'mancity',
					},
					{
						id:1,
						label:'Leipzig',
						icon: 'leipzig',
					},
				],
			},
			{
				id:16,
				theDate: 'Wednesday, Sept 15, 7:00 pm UTC (Type 3)',
				teams: [
					{
						id:1,
						label:'Sporting',
						icon: 'sporting',
					},
					{
						id:1,
						label:'Ajax',
						icon: 'ajax',
					},
				],
			},
		],
	},
	{
	    id: 2,
	    label: 'Matchday 2 of 6',
		matches:[
			{
				id:1,
				theDate: 'Tuesday, Sept 28, 4:45 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Chakthar',
						icon: 'chakhtar',
						
					},
					{
						id:2,
						label:'Inter',
						icon: 'inter',
					},
				],
			},
			{
				id:2,
				theDate: 'Tuesday, Sept 28, 4:45 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Ajax',
						icon: 'ajax',
					},
					{
						id:2,
						label:'Beşiktaş',
						icon: 'besiktas',
					},
				],
			},
			{
				id:3,
				theDate: 'Tuesday, Sept 28, 7:00 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Real',
						icon: 'ajax',
					},
					{
						id:2,
						label:'Sheriff',
						icon: 'sheriff',
					},
				],
			},
                        {
				id: 4,
				theDate: 'Tuesday, Sept 28, 7:00 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Milan',
						icon: 'milan',
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
				theDate: 'Tuesday, Sept 28, 7:00 pm UTC (Type 2)',
				teams: [
					{
						id:1,
						label:'Dortmund',
						icon: 'dortmund',
					},
					{
						id:2,
						label:'Sporting',
						icon: 'sporting',
					},
				],
			},
                        {
				id: 6,
				theDate: 'Tuesday, Sept 28, 7:00 pm UTC (Type 2)',
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
				id: 7,
				theDate: 'Tuesday, Sept 28, 7:00 pm UTC (Type 3)',
				teams: [
					{
						id:1,
						label:'Porto',
						icon: 'porto',
					},
					{
						id:2,
						label:'Liverpool',
						icon: 'liverpool',
					},
				],
			},
                        {
				id: 8,
				theDate: 'Tuesday, Sept 28, 7:00 pm UTC (Type 3)',
				teams: [
					{
						id:1,
						label:'RB Leipzig',
						icon: 'leipzig',
					},
					{
						id:2,
						label:'FC Bruges',
						icon: 'bruges',
					},
				],
			},
                        {
				id: 9,
				theDate: 'Wednesday, Sept 29, 4:45 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Atalanta',
						icon: 'atalanta',
					},
					{
						id:2,
						label:'Young Boys',
						icon: 'youngboys',
					},
				],
			},
                        {
				id: 10,
				theDate: 'Wednesday, Sept 29, 4:45 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Zenit',
						icon: 'zenit',
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
				theDate: 'Wednesday, Sept 29, 7:00 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Wolfsbourg',
						icon: 'wolfsburg',
					},
					{
						id:2,
						label:'Séville',
						icon: 'seville',
					},
				],
			},
                        {
				id: 12,
				theDate: 'Wednesday, Sept 29, 7:00 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Bayern',
						icon: 'bayern',
					},
					{
						id:2,
						label:'Dynamo Kyiv',
						icon: 'dynamo',
					},
				],
			},
                        {
				id: 13,
				theDate: 'Wednesday, Sept 29, 7:00 pm UTC (Type 2)',
				teams: [
					{
						id:1,
						label:'RB Salsburg',
						icon: 'salzburg',
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
				theDate: 'Wednesday, Sept 29, 7:00 pm UTC (Type 2)',
				teams: [
					{
						id:1,
						label:'Juventus',
						icon: 'juventus',
					},
					{
						id:2,
						label:'Chelsea',
						icon: 'chelsea',
					},
				],
			},
                        {
				id: 15,
				theDate: 'Wednesday, Sept 29, 7:00 pm UTC (Type 3)',
				teams: [
					{
						id:1,
						label:'Benfica',
						icon: 'benfica',
					},
					{
						id:2,
						label:'Barcelona',
						icon: 'barcelona',
					},
				],
			},
                        {
				id: 16,
				theDate: 'Wednesday, Sept 29, 7:00 pm UTC (Type 3)',
				teams: [
					{
						id:1,
						label:'Manchester United',
						icon: 'manchester',
					},
					{
						id:2,
						label:'Villarreal',
						icon: 'villarreal',
					},
				],
			},
		],
	},
	{
	    id: 3,
	    label: 'Matchday 3 of 6',
		matches:[
			{
				id:1,
				theDate: 'Tuesday, Oct 19, 4:45 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Beşiktaş',
						icon: 'besiktas',
						
					},
					{
						id:2,
						label:'Sporting',
						icon: 'sporting',
					},
				],
			},
			{
				id:2,
				theDate: 'Tuesday, Oct 19, 4:45 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'FC Bruges',
						icon: 'bruges',
					},
					{
						id:2,
						label:'Man City',
						icon: 'mancity',
					},
				],
			},
			{
				id:3,
				theDate: 'Tuesday, Oct 19, 7:00 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Chakthar',
						icon: 'chakhtar',
					},
					{
						id:2,
						label:'Real',
						icon: 'real',
					},
				],
			},
                        {
				id: 4,
				theDate: 'Tuesday, Oct 19, 7:00 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Paris Saint-Germain',
						icon: 'paris',
					},
					{
						id:2,
						label:'RB Leipzig',
						icon: 'leipzig',
					},
				],
			},
                        {
				id: 5,
				theDate: 'Tuesday, Oct 19, 7:00 pm UTC (Type 2)',
				teams: [
					{
						id:1,
						label:'Atlético Madrid',
						icon: 'atletico',
					},
					{
						id:2,
						label:'Liverpool',
						icon: 'liverpool',
					},
				],
			},
                        {
				id: 6,
				theDate: 'Tuesday, Oct 19, 7:00 pm UTC (Type 2)',
				teams: [
					{
						id:1,
						label:'Inter',
						icon: 'inter',
					},
					{
						id:2,
						label:'Sheriff',
						icon: 'Sheriff',
					},
				],
			},
                        {
				id: 7,
				theDate: 'Tuesday, Oct 19, 7:00 pm UTC (Type 3)',
				teams: [
					{
						id:1,
						label:'Ajax',
						icon: 'ajax',
					},
					{
						id:2,
						label:'Dortmund',
						icon: 'dortmund',
					},
				],
			},
                        {
				id: 8,
				theDate: 'Tuesday, Oct 19, 7:00 pm UTC (Type 3)',
				teams: [
					{
						id:1,
						label:'Porto',
						icon: 'porto',
					},
					{
						id:2,
						label:'Milan',
						icon: 'milan',
					},
				],
			},
                        {
				id: 9,
				theDate: 'Wednesday, Oct 20, 4:45 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'RB Salzburg',
						icon: 'salzburg',
					},
					{
						id:2,
						label:'Wolfsbourg',
						icon: 'wolfsburg',
					},
				],
			},
                        {
				id: 10,
				theDate: 'Wednesday, Oct 20, 4:45 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Barcelona',
						icon: 'barcelona',
					},
					{
						id:2,
						label:'Dynamo Kyiv',
						icon: 'dynamo',
					},
				],
			},
                        {
				id: 11,
				theDate: 'Wednesday, Oct 20, 7:00 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Lille',
						icon: 'lille',
					},
					{
						id:2,
						label:'Séville',
						icon: 'seville',
					},
				],
			},
                        {
				id: 12,
				theDate: 'Wednesday, Oct 20, 7:00 pm UTC (Type 1)',
				teams: [
					{
						id:1,
						label:'Manchester United',
						icon: 'manchester',
					},
					{
						id:2,
						label:'Atalanta',
						icon: 'atalanta',
					},
				],
			},
                        {
				id: 13,
				theDate: 'Wednesday, Oct 20, 7:00 pm UTC (Type 2)',
				teams: [
					{
						id:1,
						label:'Zenit',
						icon: 'zenit',
					},
					{
						id:2,
						label:'Juventus',
						icon: 'juventus',
					},
				],
			},
                        {
				id: 14,
				theDate: 'Wednesday, Oct 20, 7:00 pm UTC (Type 2)',
				teams: [
					{
						id:1,
						label:'Benfica',
						icon: 'benfica',
					},
					{
						id:2,
						label:'Bayern',
						icon: 'bayern',
					},
				],
			},
                        {
				id: 15,
				theDate: 'Wednesday, Oct 20, 7:00 pm UTC (Type 3)',
				teams: [
					{
						id:1,
						label:'Chelsea',
						icon: 'chelsea',
					},
					{
						id:2,
						label:'Malmö',
						icon: 'Malmö',
					},
				],
			},
                        {
				id: 16,
				theDate: 'Wednesday, Oct 20, 7:00 pm UTC (Type 3)',
				teams: [
					{
						id:1,
						label:'Young Boys',
						icon: 'youngboys',
					},
					{
						id:2,
						label:'Villarreal',
						icon: 'villarreal',
					},
				],
			},
		],
	},
	{
	    id: 4,
	    label: 'Matchday 4 of 6',
		matches:[
			{
				id:1,
				theDate: 'Tuesday, Nov 2, 4:45 pm UTC (Type 1)',
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
				theDate: 'Tuesday, Nov 2, 4:45 pm UTC (Type 1)',
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
				theDate: 'Tuesday, Nov 2, 7:00 pm UTC (Type 1)',
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
				theDate: 'Tuesday, Nov 2, 7:00 pm UTC (Type 1)',
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
				theDate: 'Tuesday, Nov 2, 7:00 pm UTC (Type 2)',
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
				theDate: 'Tuesday, Nov 2, 7:00 pm UTC (Type 2)',
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
				theDate: 'Tuesday, Nov 2, 7:00 pm UTC (Type 3)',
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
				theDate: 'Tuesday, Nov 2, 7:00 pm UTC (Type 3)',
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
				theDate: 'Wednesday, Nov 3, 4:45 pm UTC (Type 1)',
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
				theDate: 'Wednesday, Nov 3, 4:45 pm UTC (Type 1)',
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
				theDate: 'Wednesday, Nov 3, 7:00 pm UTC (Type 1)',
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
				theDate: 'Wednesday, Nov 3, 7:00 pm UTC (Type 1)',
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
				theDate: 'Wednesday, Nov 3, 7:00 pm UTC (Type 2)',
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
				theDate: 'Wednesday, Nov 3, 7:00 pm UTC (Type 2)',
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
				theDate: 'Wednesday, Nov 3, 7:00 pm UTC (Type 3)',
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
				theDate: 'Wednesday, Nov 3, 7:00 pm UTC (Type 3)',
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
		matches:[
			{
				id:1,
				theDate: 'Tuesday, Nov 23, 4:45 pm UTC (Type 1)',
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
				theDate: 'Tuesday, Nov 23, 4:45 pm UTC (Type 1)',
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
				theDate: 'Tuesday, Nov 23, 7:00 pm UTC (Type 1)',
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
				theDate: 'Tuesday, Nov 23, 7:00 pm UTC (Type 1)',
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
				theDate: 'Tuesday, Nov 23, 7:00 pm UTC (Type 2)',
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
				theDate: 'Tuesday, Nov 23, 7:00 pm UTC (Type 2)',
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
				theDate: 'Tuesday, Nov 23, 7:00 pm UTC (Type 3)',
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
				theDate: 'Tuesday, Nov 23, 7:00 pm UTC (Type 3)',
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
				theDate: 'Wednesday, Nov 24, 4:45 pm UTC (Type 1)',
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
				theDate: 'Wednesday, Nov 24, 4:45 pm UTC (Type 1)',
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
				theDate: 'Wednesday, Nov 24, 7:00 pm UTC (Type 1)',
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
				theDate: 'Wednesday, Nov 24, 7:00 pm UTC (Type 1)',
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
				theDate: 'Wednesday, Nov 24, 7:00 pm UTC (Type 2)',
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
				theDate: 'Wednesday, Nov 24, 7:00 pm UTC (Type 2)',
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
				theDate: 'Wednesday, Nov 24, 7:00 pm UTC (Type 3)',
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
				theDate: 'Wednesday, Nov 24, 7:00 pm UTC (Type 3)',
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
		matches:[
			{
				id:1,
				theDate: 'Tuesday, Dec 7, 4:45 pm UTC (Type 1)',
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
				theDate: 'Tuesday, Dec 7, 4:45 pm UTC (Type 1)',
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
				theDate: 'Tuesday, Dec 7, 7:00 pm UTC (Type 1)',
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
				theDate: 'Tuesday, Dec 7, 7:00 pm UTC (Type 1)',
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
				theDate: 'Tuesday, Dec 7, 7:00 pm UTC (Type 2)',
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
				theDate: 'Tuesday, Dec 7, 7:00 pm UTC (Type 2)',
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
				theDate: 'Tuesday, Dec 7, 7:00 pm UTC (Type 3)',
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
				theDate: 'Tuesday, Dec 7, 7:00 pm UTC (Type 3)',
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
				theDate: 'Wednesday, Dec 8, 4:45 pm UTC (Type 1)',
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
				theDate: 'Wednesday, Dec 8, 4:45 pm UTC (Type 1)',
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
				theDate: 'Wednesday, Dec 8, 7:00 pm UTC (Type 1)',
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
				theDate: 'Wednesday, Dec 8, 7:00 pm UTC (Type 1)',
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
				theDate: 'Wednesday, Dec 8, 7:00 pm UTC (Type 2)',
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
				theDate: 'Wednesday, Dec 8, 7:00 pm UTC (Type 2)',
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
				theDate: 'Wednesday, Dec 8, 7:00 pm UTC (Type 3)',
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
				theDate: 'Wednesday, Dec 8, 7:00 pm UTC (Type 3)',
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