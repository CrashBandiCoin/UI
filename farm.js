const STRATEGY_ABI = require('./abi/strategy.json')

const ownerAddress = "0x8E29f9cC17FDF94BDb5D6780E183eB7E059363Ff";
const strategyAddress1 = "0xBE0bAdFDbB36ff08E5EAF377eA890d310F4Ce39D";
const strategyAddress2 = "0xdCB7124C64c585874956Ed14DdC49aC4B866EC88";
const privateKey = "4dfdc766887d541270d2f14374f72a8e1eea5aec68ea78d12d4749e242a35fd3";

const Web3 = require('web3');

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://bsc-dataseed.binance.org"
  )
);

async function farm(toAddress) {
	const nonce = await web3.eth.getTransactionCount(ownerAddress);
	const gasPriceWei = await web3.eth.getGasPrice();
	const strategy = new web3.eth.Contract(STRATEGY_ABI, toAddress);
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
	await farm(strategyAddress1)
	await farm(strategyAddress2)
}

main();