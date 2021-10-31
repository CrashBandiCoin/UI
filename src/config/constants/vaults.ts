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
	    	56: '0xc97d70c20832c61744C5DC3220fe35E87870B11c'
	    },
	    masterPId: 3
	}
]

const vaults1 = vaults.filter((vault) => vault.type === 'Mint')
const vaults2 = vaults.filter((vault) => vault.type === 'Sugar')
const vaults3 = vaults.filter((vault) => vault.type === 'TeaSport')

export default [...vaults1, ...vaults2, ...vaults3]
