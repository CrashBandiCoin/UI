import {Contract} from "web3-eth-contract";
import {useWallet} from "@binance-chain/bsc-use-wallet";
import {useCallback, useEffect, useState} from "react";
import {ethers} from "ethers";
import BigNumber from "bignumber.js";

// Migration token
export const useMigrationToken= (migration: Contract, tokenName : string, amount: string) => {
    const { account } = useWallet()
    console.log(amount)
    return useCallback(async () => {
        try {
            let tx;
            switch(tokenName)
            {
                case 'Sugar' :
                    tx = await migration.methods
                    .migrateToSugar(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
                    .send({from: account})
                return tx;

                case 'Mint' :
                    tx = await migration.methods
                        .migrateToMint(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
                        .send({from: account})
                    return tx;

                case 'Teasport' :
                    tx = await migration.methods
                        .migrateToTeasport(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
                        .send({from: account})
                    return tx;
                case 'Jaggery' :
                    tx = await migration.methods
                        .migrateToJaggery(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
                        .send({from: account})
                    return tx;
                default:
                    return 0;
            }

        } catch (e) {
            console.log(e)
            return false
        }
    }, [account, migration, tokenName, amount])
}


// Approve Migration
export const useMigrationApprove = (tokenContract: Contract, spenderAddress: string) => {
    const { account } = useWallet()
    return useCallback(async () => {
        try {
            const tx = await tokenContract.methods
                .approve(spenderAddress, ethers.constants.MaxUint256)
                .send({from: account})
            return tx
        } catch {
            return false
        }
    }, [account, spenderAddress, tokenContract])
}

// Allowance Migration
export const useMigrationAllowance = (tokenContract: Contract, spenderAddress: string) => {
    const { account }: { account: string } = useWallet()
    const [allowance, setAllowance] = useState(null)

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await tokenContract.methods.allowance(account, spenderAddress).call()
                setAllowance(new BigNumber(res))
            } catch (e) {
                setAllowance(null)
            }
        }
        fetch()
    }, [account, spenderAddress, tokenContract])

    return allowance
}
