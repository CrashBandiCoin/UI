import contracts from './contracts'
import { FarmConfig, QuoteToken, ContractType } from './types'

const farms: FarmConfig[] = [
	{
	    id: 0,
	    pid: 2, // TODO fixe the correct APR
	    type: ContractType.Sugar,
	    risk: 5,
	    lpSymbol: 'SUGAR-BUSD',
	    lpAddresses: {
	      97: '',
	      56: '0x21cb4ED35c47B56478cc7c22A24127B8e9Bc01c2', // SUGAR-BUSD LP
	    },
	    token: {
	      symbol: 'SUGAR',
	      address: {
	        97: '',
	        56: '0x41aa9f842af935cc71252c0de4bff13f821546b8',
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