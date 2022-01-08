import {Contract} from "web3-eth-contract";
import {useWallet} from "@binance-chain/bsc-use-wallet";
import {useCallback} from "react";

export const useMigrationToken = (tokenContract: Contract, method: string, tokenBalance: number) => {
  const { account } = useWallet()
  return useCallback(async () => {
    try {
      const tx = await tokenContract.methods
          .method(tokenBalance)
          .send({from: account})
      return tx
    } catch {
      return false
    }
  }, [account, tokenContract, tokenBalance])
}

export default useMigrationToken