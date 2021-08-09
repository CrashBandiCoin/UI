import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import vaultchefABI from 'config/abi/vaultChef.json'
import vaultmintABI from 'config/abi/mastermint.json'
import vaultTeaSportABI from 'config/abi/masterteasport.json'
import multicall from 'utils/multicall'
import {
    getVaultChefAddress, 
    getVaultMintAddress, 
    getVaultTeaSportAddress, 
} from 'utils/addressHelpers'
import farmsConfig from 'config/constants/vaults'
import {QuoteToken} from '../../config/constants/types'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

const fetchVaults = async () => {
    const data = await Promise.all(
        farmsConfig.map(async (farmConfig) => {
            const lpAdress = farmConfig.isTokenOnly ? farmConfig.token.address[CHAIN_ID] : farmConfig.lpAddresses[CHAIN_ID]
            let paramAddress = ''
            if (farmConfig.type === 'Sugar')
                paramAddress = getVaultChefAddress()
            else if (farmConfig.type === 'Mint')
                paramAddress = getVaultMintAddress()
            else if (farmConfig.type === 'TeaSport')
                paramAddress = getVaultTeaSportAddress()

            const calls = [
                // Balance of token in the LP contract
                {
                    address: farmConfig.token.address[CHAIN_ID],
                    name: 'balanceOf',
                    params: [lpAdress],
                },
                // Balance of quote token on LP contract
                {
                    address: farmConfig.quoteToken.address[CHAIN_ID],
                    name: 'balanceOf',
                    params: [lpAdress],
                },
                // Balance of LP tokens in the master chef contract
                {
                    address: farmConfig.isTokenOnly ? farmConfig.token.address[CHAIN_ID] : lpAdress,
                    name: 'balanceOf',
                    params: [ paramAddress ],
                },
                // Total supply of LP tokens
                {
                    address: lpAdress,
                    name: 'totalSupply',
                },
                // Token decimals
                {
                    address: farmConfig.token.address[CHAIN_ID],
                    name: 'decimals',
                },
                // Quote token decimals
                {
                    address: farmConfig.quoteToken.address[CHAIN_ID],
                    name: 'decimals',
                },
            ]

            const [
                tokenBalanceLP,
                quoteTokenBlanceLP,
                lpTokenBalanceMC,
                lpTotalSupply,
                tokenDecimals,
                quoteTokenDecimals
            ] = await multicall(erc20, calls)

            let tokenAmount;
            let lpTotalInQuoteToken;

            let abi = null
            if (farmConfig.type === 'Sugar')
                abi = vaultchefABI
            else if (farmConfig.type === 'Mint')
                abi = vaultmintABI
            else if (farmConfig.type === 'TeaSport')
                abi = vaultTeaSportABI

            let address = ''
            if (farmConfig.type === 'Sugar')
                address = getVaultChefAddress()
            else if (farmConfig.type === 'Mint')
                address = getVaultMintAddress()
            else if (farmConfig.type === 'TeaSport')
                address = getVaultTeaSportAddress()

            let name = ''
            if (farmConfig.type === 'Sugar')
                name = 'SUGARPerBlock'
            else if (farmConfig.type === 'Mint')
                name = 'MintPerBlock'
            else if (farmConfig.type === 'TeaSport')
                name = 'teasportPerBlock'

            if (farmConfig.type === 'Sugar') {
                const [info, tvl, lpTokenBalanceOnMC, apr] = await multicall(
                    abi,
                    [
                        {
                            address,
                            name: 'poolInfo',
                            params: [farmConfig.pid],
                        },
                        {
                            address,
                            name: 'getTVL',
                            params: [farmConfig.pid]
                        },
                        // Balance of LP tokens in the master chef contract
                        {
                            address: paramAddress,
                            name: 'getTotalOnMC',
                            params: [ farmConfig.pid ],
                        },
                        {
                            address: paramAddress,
                            name: 'getAPR',
                            params: [ farmConfig.pid ],
                        },
                    ]
                )

                let tokenPriceVsQuote;

                // Ratio in % a LP tokens that are in staking, vs the total number in circulation
                const lpTokenRatio = new BigNumber(lpTokenBalanceOnMC).div(new BigNumber(lpTotalSupply))

                // Total value in staking in quote token value
                lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
                    .div(new BigNumber(10).pow(18))
                    .times(new BigNumber(2))
                    .times(lpTokenRatio)

                // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
                tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
                const quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
                    .div(new BigNumber(10).pow(quoteTokenDecimals))
                    .times(lpTokenRatio)

                if (tokenAmount.comparedTo(0) > 0) {
                    tokenPriceVsQuote = quoteTokenAmount.div(tokenAmount);
                } else {
                    tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(tokenBalanceLP));
                }

                const allocPoint = new BigNumber(info.allocPoint._hex)

                return {
                    ...farmConfig,
                    tokenAmount: tokenAmount.toJSON(),
                    // quoteTokenAmount: quoteTokenAmount,
                    lpTotalInQuoteToken: new BigNumber(tvl).div(new BigNumber(10).pow(tokenDecimals)).toJSON(),
                    tokenPriceVsQuote: tokenPriceVsQuote.toJSON(),
                    multiplier: `${allocPoint.div(100).toString()}X`,
                    depositFeeBP: new BigNumber(info.depositFeeBP || 0).toJSON(),
                    apr: new BigNumber(apr || 0).toNumber(),
                    tvl: new BigNumber(tvl).div(new BigNumber(10).pow(tokenDecimals)).toNumber(),
                    lpTotalSupply: new BigNumber(lpTotalSupply).div(new BigNumber(10).pow(tokenDecimals)).toJSON(),
                    lpTokenBalanceMC: new BigNumber(tvl).div(new BigNumber(10).pow(tokenDecimals)).toJSON(),
                }
            } else {
                let tokenPriceVsQuote;
                if (farmConfig.isTokenOnly) {
                    tokenAmount = new BigNumber(lpTokenBalanceMC).div(new BigNumber(10).pow(tokenDecimals));
                    if (farmConfig.token.symbol === QuoteToken.BUSD && farmConfig.quoteToken.symbol === QuoteToken.BUSD) {
                        tokenPriceVsQuote = new BigNumber(1);
                    } else {
                        tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(tokenBalanceLP));
                    }
                    lpTotalInQuoteToken = tokenAmount.times(tokenPriceVsQuote);
                } else {
                    // Ratio in % a LP tokens that are in staking, vs the total number in circulation
                    const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))

                    // Total value in staking in quote token value
                    lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
                        .div(new BigNumber(10).pow(18))
                        .times(new BigNumber(2))
                        .times(lpTokenRatio)

                    // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
                    tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
                    const quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
                        .div(new BigNumber(10).pow(quoteTokenDecimals))
                        .times(lpTokenRatio)

                    if (tokenAmount.comparedTo(0) > 0) {
                        tokenPriceVsQuote = quoteTokenAmount.div(tokenAmount);
                    } else {
                        tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(tokenBalanceLP));
                    }
                }

                if (farmConfig.type === 'Sugar')
                    abi = vaultchefABI
                else if (farmConfig.type === 'Mint')
                    abi = vaultmintABI
                else if (farmConfig.type === 'TeaSport')
                    abi = vaultTeaSportABI

                const [info, totalAllocPoint, perblock] = await multicall(
                    abi,
                    [
                        {
                            address,
                            name: 'poolInfo',
                            params: [farmConfig.pid],
                        },
                        {
                            address,
                            name: 'totalAllocPoint',
                        },
                        {
                            address,
                            name
                        },
                    ]
                )

                const allocPoint = new BigNumber(info.allocPoint._hex)
                const poolWeight = allocPoint.div(new BigNumber(totalAllocPoint))
                let MintPerBlock = null
                let SUGARPerBlock = null
                let TeaSportPerBlock = null

                if (farmConfig.type === 'Mint') {
                    MintPerBlock = perblock
                } else if (farmConfig.type === 'TeaSport') {
                    TeaSportPerBlock = perblock
                } else if (farmConfig.type === 'Sugar') {
                    SUGARPerBlock = perblock
                } else {
                    MintPerBlock = perblock
                    SUGARPerBlock = perblock
                    TeaSportPerBlock = perblock
                }

                return {
                    ...farmConfig,
                    tokenAmount: tokenAmount.toJSON(),
                    // quoteTokenAmount: quoteTokenAmount,
                    lpTotalInQuoteToken: lpTotalInQuoteToken ? lpTotalInQuoteToken.toJSON() : "0",
                    tokenPriceVsQuote: tokenPriceVsQuote.toJSON(),
                    poolWeight: poolWeight.toNumber(),
                    multiplier: `${allocPoint.div(100).toString()}X`,
                    depositFeeBP: info.depositFeeBP ? new BigNumber(info.depositFeeBP).toNumber() : new BigNumber(0).toNumber(),
                    MintPerBlock: new BigNumber(MintPerBlock).toNumber(),
                    SUGARPerBlock: new BigNumber(SUGARPerBlock).toNumber(),
                    TeaSportPerBlock: new BigNumber(TeaSportPerBlock).toNumber(),
                    lpTotalSupply: new BigNumber(lpTotalSupply).div(new BigNumber(10).pow(tokenDecimals)).toJSON(),
                    lpTokenBalanceMC: new BigNumber(lpTokenBalanceMC).div(new BigNumber(10).pow(tokenDecimals)).toJSON(),
                }
            }            
        }),
    )

    const farms1 = data.filter((farm) => farm.type === 'Mint')
    const farms2 = data.filter((farm) => farm.type === 'Sugar')
    const farms3 = data.filter((farm) => farm.type === 'TeaSport')

    farms1.sort((a, b) => (a.pid > b.pid) ? 1 : -1)
    farms2.sort((a, b) => (a.pid > b.pid) ? 1 : -1)
    farms3.sort((a, b) => (a.pid > b.pid) ? 1 : -1)
    return [...farms1, ...farms2, ...farms3]
}

export default fetchVaults
