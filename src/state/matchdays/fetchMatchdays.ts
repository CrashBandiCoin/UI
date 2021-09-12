import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import matchdaychefABI from 'config/abi/matchdayChef.json'
import multicall from 'utils/multicall'
import {
    getMatchdayChefAddress, 
} from 'utils/addressHelpers'

import matchdays from 'config/constants/matchdays'
import {ChampionsLeagueToken} from 'config/constants/types'
import { Matchday } from 'state/types'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

// const fetchMatchdays = async ():Matchday[] => {
    const fetchMatchdays = ():Matchday[] => {

    const data =  matchdays 
 

    // const data = await Promise.all(
    //     matchdays.map(async (matchday) => {
    //         const lpAdress = matchday.isTokenOnly ? matchday.token.address[CHAIN_ID] : matchday.lpAddresses[CHAIN_ID]
    //         let paramAddress = ''
    //         if (matchday.type === 'Sugar')
    //             paramAddress = getMatchdayChefAddress()
    //         else if (matchday.type === 'Mint')
    //             paramAddress = getMatchdayMintAddress()
    //         else if (matchday.type === 'TeaSport')
    //             paramAddress = getMatchdayTeaSportAddress()

    //         const calls = [
    //             // Balance of token in the LP contract
    //             {
    //                 address: matchday.token.address[CHAIN_ID],
    //                 name: 'balanceOf',
    //                 params: [lpAdress],
    //             },
    //             // Balance of quote token on LP contract
    //             {
    //                 address: matchday.quoteToken.address[CHAIN_ID],
    //                 name: 'balanceOf',
    //                 params: [lpAdress],
    //             },
    //             // Balance of LP tokens in the master chef contract
    //             {
    //                 address: matchday.isTokenOnly ? matchday.token.address[CHAIN_ID] : lpAdress,
    //                 name: 'balanceOf',
    //                 params: [ paramAddress ],
    //             },
    //             // Total supply of LP tokens
    //             {
    //                 address: lpAdress,
    //                 name: 'totalSupply',
    //             },
    //             // Token decimals
    //             {
    //                 address: matchday.token.address[CHAIN_ID],
    //                 name: 'decimals',
    //             },
    //             // Quote token decimals
    //             {
    //                 address: matchday.quoteToken.address[CHAIN_ID],
    //                 name: 'decimals',
    //             },
    //         ]

    //         const [
    //             tokenBalanceLP,
    //             quoteTokenBlanceLP,
    //             lpTokenBalanceMC,
    //             lpTotalSupply,
    //             tokenDecimals,
    //             quoteTokenDecimals
    //         ] = await multicall(erc20, calls)

    //         let tokenAmount;
    //         let lpTotalInQuoteToken;

    //         let abi = null
    //         if (matchday.type === 'Sugar')
    //             abi = matchdaychefABI
    //         else if (matchday.type === 'Mint')
    //             abi = matchdaymintABI
    //         else if (matchday.type === 'TeaSport')
    //             abi = matchdayTeaSportABI

    //         let address = ''
    //         if (matchday.type === 'Sugar')
    //             address = getMatchdayChefAddress()
    //         else if (matchday.type === 'Mint')
    //             address = getMatchdayMintAddress()
    //         else if (matchday.type === 'TeaSport')
    //             address = getMatchdayTeaSportAddress()

    //         let name = ''
    //         if (matchday.type === 'Sugar')
    //             name = 'SUGARPerBlock'
    //         else if (matchday.type === 'Mint')
    //             name = 'MintPerBlock'
    //         else if (matchday.type === 'TeaSport')
    //             name = 'teasportPerBlock'

    //         if (matchday.type === 'Sugar') {
    //             const [info, tvl, lpTokenBalanceOnMC, apr] = await multicall(
    //                 abi,
    //                 [
    //                     {
    //                         address,
    //                         name: 'poolInfo',
    //                         params: [matchday.pid],
    //                     },
    //                     {
    //                         address,
    //                         name: 'getTVL',
    //                         params: [matchday.pid]
    //                     },
    //                     // Balance of LP tokens in the master chef contract
    //                     {
    //                         address: paramAddress,
    //                         name: 'getTotalOnMC',
    //                         params: [ matchday.pid ],
    //                     },
    //                     {
    //                         address: paramAddress,
    //                         name: 'getAPR',
    //                         params: [ matchday.pid ],
    //                     },
    //                 ]
    //             )

    //             let tokenPriceVsQuote;

    //             // Ratio in % a LP tokens that are in staking, vs the total number in circulation
    //             const lpTokenRatio = new BigNumber(lpTokenBalanceOnMC).div(new BigNumber(lpTotalSupply))

    //             // Total value in staking in quote token value
    //             lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
    //                 .div(new BigNumber(10).pow(18))
    //                 .times(new BigNumber(2))
    //                 .times(lpTokenRatio)

    //             // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
    //             tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
    //             const quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
    //                 .div(new BigNumber(10).pow(quoteTokenDecimals))
    //                 .times(lpTokenRatio)
                    
    //             const aprValue = new BigNumber(apr || 0).div(new BigNumber(tvl || 1))

    //             if (tokenAmount.comparedTo(0) > 0) {
    //                 tokenPriceVsQuote = quoteTokenAmount.div(tokenAmount);
    //             } else {
    //                 tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(tokenBalanceLP));
    //             }

    //             const allocPoint = new BigNumber(info.allocPoint._hex)

    //             return {
    //                 ...matchday,
    //                 tokenAmount: tokenAmount.toJSON(),
    //                 // quoteTokenAmount: quoteTokenAmount,
    //                 lpTotalInQuoteToken: new BigNumber(tvl).div(new BigNumber(10).pow(tokenDecimals)).toJSON(),
    //                 tokenPriceVsQuote: tokenPriceVsQuote.toJSON(),
    //                 multiplier: `${allocPoint.div(100).toString()}X`,
    //                 depositFeeBP: new BigNumber(info.depositFeeBP || 0).toJSON(),
    //                 apr: new BigNumber(aprValue || 0).toNumber(),
    //                 tvl: new BigNumber(tvl).div(new BigNumber(10).pow(tokenDecimals)).toNumber(),
    //                 lpTotalSupply: new BigNumber(lpTotalSupply).div(new BigNumber(10).pow(tokenDecimals)).toJSON(),
    //                 lpTokenBalanceMC: new BigNumber(tvl).div(new BigNumber(10).pow(tokenDecimals)).toJSON(),
    //             }
    //         } else {
    //             let tokenPriceVsQuote;
    //             if (matchday.isTokenOnly) {
    //                 tokenAmount = new BigNumber(lpTokenBalanceMC).div(new BigNumber(10).pow(tokenDecimals));
    //                 if (matchday.token.symbol === QuoteToken.BUSD && matchday.quoteToken.symbol === QuoteToken.BUSD) {
    //                     tokenPriceVsQuote = new BigNumber(1);
    //                 } else {
    //                     tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(tokenBalanceLP));
    //                 }
    //                 lpTotalInQuoteToken = tokenAmount.times(tokenPriceVsQuote);
    //             } else {
    //                 // Ratio in % a LP tokens that are in staking, vs the total number in circulation
    //                 const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))

    //                 // Total value in staking in quote token value
    //                 lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
    //                     .div(new BigNumber(10).pow(18))
    //                     .times(new BigNumber(2))
    //                     .times(lpTokenRatio)

    //                 // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
    //                 tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
    //                 const quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
    //                     .div(new BigNumber(10).pow(quoteTokenDecimals))
    //                     .times(lpTokenRatio)

    //                 if (tokenAmount.comparedTo(0) > 0) {
    //                     tokenPriceVsQuote = quoteTokenAmount.div(tokenAmount);
    //                 } else {
    //                     tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(tokenBalanceLP));
    //                 }
    //             }

    //             if (matchday.type === 'Sugar')
    //                 abi = matchdaychefABI
    //             else if (matchday.type === 'Mint')
    //                 abi = matchdaymintABI
    //             else if (matchday.type === 'TeaSport')
    //                 abi = matchdayTeaSportABI

    //             const [info, totalAllocPoint, perblock] = await multicall(
    //                 abi,
    //                 [
    //                     {
    //                         address,
    //                         name: 'poolInfo',
    //                         params: [matchday.pid],
    //                     },
    //                     {
    //                         address,
    //                         name: 'totalAllocPoint',
    //                     },
    //                     {
    //                         address,
    //                         name
    //                     },
    //                 ]
    //             )

    //             const allocPoint = new BigNumber(info.allocPoint._hex)
    //             const poolWeight = allocPoint.div(new BigNumber(totalAllocPoint))
    //             let MintPerBlock = null
    //             let SUGARPerBlock = null
    //             let TeaSportPerBlock = null

    //             if (matchday.type === 'Mint') {
    //                 MintPerBlock = perblock
    //             } else if (matchday.type === 'TeaSport') {
    //                 TeaSportPerBlock = perblock
    //             } else if (matchday.type === 'Sugar') {
    //                 SUGARPerBlock = perblock
    //             } else {
    //                 MintPerBlock = perblock
    //                 SUGARPerBlock = perblock
    //                 TeaSportPerBlock = perblock
    //             }

    //             return {
    //                 ...matchday,
    //                 tokenAmount: tokenAmount.toJSON(),
    //                 // quoteTokenAmount: quoteTokenAmount,
    //                 lpTotalInQuoteToken: lpTotalInQuoteToken ? lpTotalInQuoteToken.toJSON() : "0",
    //                 tokenPriceVsQuote: tokenPriceVsQuote.toJSON(),
    //                 poolWeight: poolWeight.toNumber(),
    //                 multiplier: `${allocPoint.div(100).toString()}X`,
    //                 depositFeeBP: info.depositFeeBP ? new BigNumber(info.depositFeeBP).toNumber() : new BigNumber(0).toNumber(),
    //                 MintPerBlock: new BigNumber(MintPerBlock).toNumber(),
    //                 SUGARPerBlock: new BigNumber(SUGARPerBlock).toNumber(),
    //                 TeaSportPerBlock: new BigNumber(TeaSportPerBlock).toNumber(),
    //                 lpTotalSupply: new BigNumber(lpTotalSupply).div(new BigNumber(10).pow(tokenDecimals)).toJSON(),
    //                 lpTokenBalanceMC: new BigNumber(lpTokenBalanceMC).div(new BigNumber(10).pow(tokenDecimals)).toJSON(),
    //             }
    //         }            
    //     }),
    // )

    data.sort((a, b) => (a.id > b.id) ? 1 : -1)

    return [...data]
}

export default fetchMatchdays
