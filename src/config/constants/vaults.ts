import contracts from './contracts'
import { VaultConfig, QuoteToken, ContractType } from './types'

const vaults: VaultConfig[] = [
	{
	    id: 0,
	    pid: 0,
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
	    	56: '0xd00ee354Ab51933eA48119A926226A5521CD5e3b'
	    },
	    masterPId: 3
	},
	{
		id: 1,
		pid: 4,
		type: ContractType.Sugar,
		isTokenOnly: true,
		lpSymbol: 'CAKE',
		lpAddresses: {
			97: '',
			56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
		},
		token: {
			symbol: 'CAKE',
			address: {
				97: '',
				56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
			},
		},
		quoteToken: {
			symbol: QuoteToken.BUSD,
			address: contracts.busd
		},
		contract: contracts.masterChefCake,
		stratgy: {
			97: '',
			56: '0xAD541F9247cdF40Fe6139B3958812fA51119Aaf3'
		},
		masterPId: 0
	},
	{
		id: 2,
		pid: 5,
		type: ContractType.Sugar,
		isTokenOnly: true,
		lpSymbol: 'BANANA',
		lpAddresses: {
			97: '',
			56: '0x7Bd46f6Da97312AC2DBD1749f82E202764C0B914', // BANANA-BUSD LP
		},
		token: {
			symbol: 'BANANA',
			address: {
				97: '',
				56: '0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95',
			},
		},
		quoteToken: {
			symbol: QuoteToken.BUSD,
			address: contracts.busd
		},
		contract: contracts.masterChefBanana,
		stratgy: {
			97: '',
			56: '0x61F4590d4ac4BB4EBC3Ca728d7b6920f11ce415B'
		},
		masterPId: 0
	},
]

const vaults1 = vaults.filter((vault) => vault.type === 'Mint')
const vaults2 = vaults.filter((vault) => vault.type === 'Sugar')
const vaults3 = vaults.filter((vault) => vault.type === 'TeaSport')

export default [...vaults1, ...vaults2, ...vaults3]
