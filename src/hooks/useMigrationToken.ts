import {Contract} from "web3-eth-contract";
import {useWallet} from "@binance-chain/bsc-use-wallet";
import {useCallback} from "react";
import {migrateToSugar} from "../utils/callHelpers";

export const useMigrationToken = (tokenContract: Contract, tokenBalance: number) => {
  const { account } = useWallet()
  return useCallback(async () => {
      await migrateToSugar(Contract, tokenBalance, account)
  }, [account, tokenBalance])
}

export default useMigrationToken