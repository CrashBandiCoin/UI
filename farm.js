const STRATEGY_ABI = require('./abi/strategy.json')

const ownerAddress = "0x35f16A46D3cf19010d28578A8b02DfA3CB4095a1";
const strategyAddress1 = "0x366a9dC5846F721c79c1930808Dd8147C7b80B86";
const strategyAddress2 = "0x366a9dC5846F721c79c1930808Dd8147C7b80B86";
const strategyAddress3 = "0x366a9dC5846F721c79c1930808Dd8147C7b80B86";
const privateKey = "";

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
	await farm(strategyAddress3)
}

main();