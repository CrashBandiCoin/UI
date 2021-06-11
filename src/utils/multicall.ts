import { AbiItem } from 'web3-utils'
import { Interface } from '@ethersproject/abi'
import { getWeb3 } from 'utils/web3'
import MultiCallAbi from 'config/abi/Multicall.json'
import { getMulticallAddress } from 'utils/addressHelpers'

interface Call {
  address: string // Address of the contract
  name: string // Function name on the contract (exemple: balanceOf)
  params?: any[] // Function params
}

const multicall = async (abi: any[], calls: Call[]) => {
  const web3 = getWeb3()
  const multi = new web3.eth.Contract((MultiCallAbi as unknown) as AbiItem, getMulticallAddress())
  const itf = new Interface(abi)

  
  const calldata = calls.map((call) => [call.address.toLowerCase(), itf.encodeFunctionData(call.name, call.params)])
  if (calls.length > 10 && calls[10].params && calls[10].name === "pendingMint" && calls[10].params[0] === 12) {
    console.log(calldata[10])
    calldata.pop()
  }
  const { returnData } = await multi.methods.aggregate(calldata).call()
  let res = returnData.map((call, i) => itf.decodeFunctionResult(calls[i].name, call))

  if (calls.length > 10 && calls[10].params && calls[10].name === "pendingMint" && calls[10].params[0] === 12)
    res = [ ...res, "0x0000000000000000000000000000000000000000000000000000000000000000" ]

  return res
}

export default multicall
