import contracts from './contracts'
import { FarmConfig, QuoteToken, ContractType } from './types'

const farms: FarmConfig[] = [
	{
	    id: 1,
	    pid: 3, // TODO fixe the correct APR
	    type: ContractType.Sugar,
	    risk: 5,
	    isTokenOnly: true,
	    lpSymbol: 'CAKE',
	    lpAddresses: {
	      97: '',
	      56: '0x3a621acce6b06ddc101c8e2cfcba29270a0f3154', // SUGAR-BUSD LP
	    },
	    token: {
	      symbol: 'CAKE',
	      address: {
	        97: '',
	        56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
	      },
	    },
	    quoteToken: {
	      symbol: QuoteToken.BUSD,
	      address: contracts.busd
	    }
	},
	{
	    id: 4,
	    pid: 2,
	    type: ContractType.Mint,
	    risk: 3,
	    lpSymbol: 'BNB-BUSD LP',
	    lpAddresses: {
	      97: '',
	      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
	    },
	    token: {
	      symbol: 'BNB',
	      address: {
	        97: '',
	        56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
	      },
	    },
	    quoteToken: {
	      symbol: QuoteToken.BUSD,
	      address: contracts.busd
	    }
	},
]

const farms1 = farms.filter((farm) => farm.type === 'Mint')
const farms2 = farms.filter((farm) => farm.type === 'Sugar')
const farms3 = farms.filter((farm) => farm.type === 'TeaSport')

export default [...farms1, ...farms2, ...farms3]