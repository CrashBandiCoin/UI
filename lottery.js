const lotteryAbi = require("./abi/lottery.json");
const lotteryNFTAbi = require("./abi/lottery.json");
const Web3 = require("web3");

const fromAddress = "0x35f16A46D3cf19010d28578A8b02DfA3CB4095a1";
const toAddress = "0x366a9dC5846F721c79c1930808Dd8147C7b80B86";
const toNFTAddress = "0x366a9dC5846F721c79c1930808Dd8147C7b80B86";
const privateKey = "";

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://bsc-dataseed.binance.org"
  )
);

const lottery = new web3.eth.Contract(lotteryAbi, toAddress);
const lotteryNFT = new web3.eth.Contract(lotteryNFTAbi, toNFTAddress);

const enterDrawing  = async (contract, address) =>  {
  const nonce = await web3.eth.getTransactionCount(fromAddress);
  const gasPriceWei = await web3.eth.getGasPrice();
  const data = contract.methods.enterDrawingPhase().encodeABI()

  const signedTx  = await web3.eth.accounts.signTransaction({
      to: address,
      gas: 2000000,
      data: data,
      gasPrice: gasPriceWei,
      nonce: nonce,
      chainId: 56
  }, privateKey)

  await web3.eth.sendSignedTransaction(signedTx.rawTransaction || signedTx.rawTransaction);

}

const drawing = async (contract, address) => {
  const nonce = await web3.eth.getTransactionCount(fromAddress);
  const gasPriceWei = await web3.eth.getGasPrice();
  const randomNumber = Math.floor((Math.random() * 10) + 1);
  const data = contract.methods.drawing(randomNumber).encodeABI()

  const signedTx  = await web3.eth.accounts.signTransaction({
      to: address,
      gas: 2000000,
      data: data,
      gasPrice: gasPriceWei,
      nonce: nonce,
      chainId: 56
  }, privateKey)

  await web3.eth.sendSignedTransaction(signedTx.rawTransaction || signedTx.rawTransaction);
};

const reset = async (address) => {
  const nonce = await web3.eth.getTransactionCount(fromAddress);
  const gasPriceWei = await web3.eth.getGasPrice();

  const signedTx  = await web3.eth.accounts.signTransaction({
      to: address,
      gas: 2000000,
      data: '0xd826f88f',
      gasPrice: gasPriceWei,
      nonce: nonce,
      chainId: 56
  }, privateKey)

  await web3.eth.sendSignedTransaction(signedTx.rawTransaction || signedTx.rawTransaction);
};

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function main() {
  await enterDrawing(lottery, toAddress)
  await drawing(lottery, toAddress)
  await reset(toAddress)

  await enterDrawing(lotteryNFT, toNFTAddress)
  await drawing(lotteryNFT, toNFTAddress)
  await reset(toNFTAddress)
}

main();