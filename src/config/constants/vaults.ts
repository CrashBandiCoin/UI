import contracts from './contracts'
import { VaultConfig, QuoteToken, ContractType } from './types'

const vaults: VaultConfig[] = [
	{
	    id: 0,
	    pid: 1,
	    type: ContractType.Sugar,
	    isTokenOnly: true,
	    lpSymbol: 'SUGAR',
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
	    },
	    contract: contracts.masterChef,
	    stratgy: {
	    	97: '',
	    	56: '0x1efCa706AA6594f3Ab097C1D2a2d4b5610b60155'
	    }
	},
	{
	    id: 4,
	    pid: 2,
	    type: ContractType.Sugar,
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
	    },
	    stratgy: {
	    	97: '',
	    	56: '0x1efCa706AA6594f3Ab097C1D2a2d4b5610b60155'
	    }
	},
]

const vaults1 = vaults.filter((vault) => vault.type === 'Mint')
const vaults2 = vaults.filter((vault) => vault.type === 'Sugar')
const vaults3 = vaults.filter((vault) => vault.type === 'TeaSport')

export default [...vaults1, ...vaults2, ...vaults3]