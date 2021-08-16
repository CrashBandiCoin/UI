import contracts from './contracts'
import { VaultConfig, QuoteToken, ContractType } from './types'

const vaults: VaultConfig[] = [
	{
	    id: 1,
	    pid: 4, // TODO fixe the correct APR
	    type: ContractType.Sugar,
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
	    id: 2,
	    pid: 7,
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
	    }
	},
	{
	    id: 3,
	    pid: 5,
	    type: ContractType.Sugar,
	    isTokenOnly: false,
	    lpSymbol: 'CAKE-BNB',
	    lpAddresses: {
	      97: '',
	      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0', // SUGAR-BUSD LP
	    },
	    token: {
	      symbol: 'CAKE',
	      address: {
	        97: '',
	        56: '0x41aa9f842af935cc71252c0de4bff13f821546b8',
	      },
	    },
	    quoteToken: {
	      symbol: QuoteToken.BNB,
	      address: contracts.wbnb
	    }
	},
	{
	    id: 4,
	    pid: 2,
	    type: ContractType.Mint,
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

const vaults1 = vaults.filter((vault) => vault.type === 'Mint')
const vaults2 = vaults.filter((vault) => vault.type === 'Sugar')
const vaults3 = vaults.filter((vault) => vault.type === 'TeaSport')

export default [...vaults1, ...vaults2, ...vaults3]