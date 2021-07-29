const SUGARU_STRATEGY_ABI = require('./abi/sugarStrategy.json')
const CAKE_STRATEGY_ABI = require('./abi/cakeStrategy.json')

const ownerAddress = "add your address";
const sugarStrategyAddress = "0x297Fc82C7469B1019B8aEEBB74DF8dEdEA88911a";
const cakeStrategyAddress = "0x4b1AE1871de7fA67AE61F7B6500211F38f2fEDAf";
const privateKey = "add your private key";

const Web3 = require('web3');

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://bsc-dataseed.binance.org"
  )
);

async function farm(toAddress, abi) {
	const nonce = await web3.eth.getTransactionCount(ownerAddress);
	const gasPriceWei = await web3.eth.getGasPrice();
	const strategy = new web3.eth.Contract(abi, toAddress);
	const data = strategy.methods.harvest(toAddress).encodeABI()

	console.log("farm staking")

	const signedTx  = await web3.eth.accounts.signTransaction({
	  to: toAddress,
	  gas: 2000000,
	  data: data,
	  gasPrice: gasPriceWei,
	  nonce: nonce,
	  chainId: 56
	}, privateKey)
	
	await web3.eth.sendSignedTransaction(signedTx.rawTransaction || signedTx.rawTransaction);
}

async function main() {
	await farm(sugarStrategyAddress, SUGARU_STRATEGY_ABI)
	await farm(cakeStrategyAddress, CAKE_STRATEGY_ABI)
}

main();