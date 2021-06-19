import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import masterchefABI from 'config/abi/masterchef.json'
import mastermintABI from 'config/abi/mastermint.json'
import masterTeaSportABI from 'config/abi/masterteasport.json'
import multicall from 'utils/multicall'
import {getMasterChefAddress, getMasterMintAddress, getMasterTeaSportAddress} from 'utils/addressHelpers'
import farmsConfig from 'config/constants/farms'
import {QuoteToken} from '../../config/constants/types'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

const fetchFarms = async () => {
    const data = await Promise.all(
        farmsConfig.map(async (farmConfig) => {
            const lpAdress = farmConfig.lpAddresses[CHAIN_ID]
            const calls = [
                // Balance of token in the LP contract
                {
                    address: farmConfig.tokenAddresses[CHAIN_ID],
                    name: 'balanceOf',
                    params: [lpAdress],
                },
                // Balance of quote token on LP contract
                {
                    address: farmConfig.quoteTokenAdresses[CHAIN_ID],
                    name: 'balanceOf',
                    params: [lpAdress],
                },
                // Balance of LP tokens in the master chef contract
                {
                    address: farmConfig.isTokenOnly ? farmConfig.tokenAddresses[CHAIN_ID] : lpAdress,
                    name: 'balanceOf',
                    params: [farmConfig.type === 'TeaSport' ? getMasterTeaSportAddress() : getMasterChefAddress()],
                },
                // Total supply of LP tokens
                {
                    address: lpAdress,
                    name: 'totalSupply',
                },
                // Token decimals
                {
                    address: farmConfig.tokenAddresses[CHAIN_ID],
                    name: 'decimals',
                },
                // Quote token decimals
                {
                    address: farmConfig.quoteTokenAdresses[CHAIN_ID],
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
            let tokenPriceVsQuote;
            if (farmConfig.isTokenOnly) {
                tokenAmount = new BigNumber(lpTokenBalanceMC).div(new BigNumber(10).pow(tokenDecimals));
                if (farmConfig.tokenSymbol === QuoteToken.BUSD && farmConfig.quoteTokenSymbol === QuoteToken.BUSD) {
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

            let abi = null
            if (farmConfig.type === 'Sugar')
                abi = masterchefABI
            else if (farmConfig.type === 'Mint')
                abi = mastermintABI
            else if (farmConfig.type === 'TeaSport')
                abi = masterTeaSportABI

            let address = ''
            if (farmConfig.type === 'Sugar')
                address = getMasterChefAddress()
            else if (farmConfig.type === 'Mint')
                address = getMasterMintAddress()
            else if (farmConfig.type === 'TeaSport')
                address = getMasterTeaSportAddress()

            let name = ''
            if (farmConfig.type === 'Sugar')
                name = 'sugarPerBlock'
            else if (farmConfig.type === 'Mint')
                name = 'MintPerBlock'
            else if (farmConfig.type === 'TeaSport')
                name = 'teasportPerBlock'

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
                lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
                tokenPriceVsQuote: tokenPriceVsQuote.toJSON(),
                poolWeight: poolWeight.toNumber(),
                multiplier: `${allocPoint.div(100).toString()}X`,
                depositFeeBP: info.depositFeeBP,
                MintPerBlock: new BigNumber(MintPerBlock).toNumber(),
                SUGARPerBlock: new BigNumber(SUGARPerBlock).toNumber(),
                TeaSportPerBlock: new BigNumber(TeaSportPerBlock).toNumber(),
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

export default fetchFarms
