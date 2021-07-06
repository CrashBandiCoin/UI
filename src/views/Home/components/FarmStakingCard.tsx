import React, {useState, useCallback} from 'react'
import styled from 'styled-components'
import {Heading, Card, CardBody, Button} from '@pancakeswap-libs/uikit'
import {useWallet} from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import {useAllHarvest} from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import {usePriceCakeBusd, usePriceMintBusd, usePriceTeaSportBusd} from '../../../state/hooks'
import useTokenBalance from '../../../hooks/useTokenBalance'
import {getCakeAddress, getMintAddress, getTeaSportAddress} from '../../../utils/addressHelpers'
import {useAllEarnings, useAllEarningsByCategory} from '../../../hooks/useAllEarnings'
import {getBalanceNumber} from '../../../utils/formatBalance'




const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/SUGAR/2a.png');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
  
`

const Block2 = styled.div`
  display:flex;
  margin-left:20px;
  margin-top:10px;
  
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({theme}) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const FarmedStakingCard = () => {
    const [pendingTx, setPendingTx] = useState(false)
    const {account} = useWallet()
    const TranslateString = useI18n()
    const farmsWithBalance = useFarmsWithBalance()
    const cakeBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
    const mintBalance = getBalanceNumber(useTokenBalance(getMintAddress()))
    const teasportBalance = getBalanceNumber(useTokenBalance(getTeaSportAddress()))
    const MINTPrice = usePriceMintBusd().toNumber()
    const SUGARPrice = usePriceCakeBusd().toNumber()
    const TEASPORTPrice = usePriceTeaSportBusd().toNumber()
    const allEarningsSugar = useAllEarningsByCategory('Sugar')
    const allEarningsTeasport = useAllEarningsByCategory('TeaSport')

    const earningsSumSugar = allEarningsSugar.reduce((accum, earning) => {
        return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
    }, 0)
    const earningsSumTeasport = allEarningsTeasport.reduce((accum, earning) => {
        return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
    }, 0)

    const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

    const {onReward} = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))
    // const { onRewardCompound } = useAllCompound(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

    const harvestAllFarms = useCallback(async () => {
        setPendingTx(true)
        try {
            await onReward()
        } catch (error) {
            console.log(error)
        } finally {
            setPendingTx(false)
        }
    }, [onReward])


    const addWatchBlzdToken = useCallback(async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const provider = window.ethereum
        if (provider) {
            try {
                // wasAdded is a boolean. Like any RPC method, an error may be thrown.
                const wasAdded = await provider.request({
                    method: 'wallet_watchAsset',
                    params: {
                        type: 'ERC20',
                        options: {
                            address: '0x41AA9F842AF935cC71252C0dE4BFF13F821546b8',
                            symbol: 'SUGAR',
                            decimals: '18',
                            image:
                                '',
                        },
                    },
                })

                if (wasAdded) {
                    console.log('Token was added')
                }
            } catch (error) {
                console.log(error)
            }
        }
    }, [])

    const addWatchMintToken = useCallback(async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const provider = window.ethereum
        if (provider) {
            try {
                // wasAdded is a boolean. Like any RPC method, an error may be thrown.
                const wasAdded = await provider.request({
                    method: 'wallet_watchAsset',
                    params: {
                        type: 'ERC20',
                        options: {
                            address: '0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f',
                            symbol: 'MINT',
                            decimals: '18',
                            image:
                                '',
                        },
                    },
                })

                if (wasAdded) {
                    console.log('Token was added')
                }
            } catch (error) {
                console.log(error)
            }
        }
    }, [])

    const addWatchTeaSportToken = useCallback(async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const provider = window.ethereum
        if (provider) {
            try {
                // wasAdded is a boolean. Like any RPC method, an error may be thrown.
                const wasAdded = await provider.request({
                    method: 'wallet_watchAsset',
                    params: {
                        type: 'ERC20',
                        options: {
                            address: '0xAd299ec68f0DD14B1EBDCF821BdA48dF2F6f655c',
                            symbol: 'TeaSportV1',
                            decimals: '18',
                            image:
                                '',
                        },
                    },
                })

                if (wasAdded) {
                    console.log('Token was added')
                }
            } catch (error) {
                console.log(error)
            }
        }
    }, [])


    return (
        <StyledFarmStakingCard>
            <CardBody>
                <Heading size="xl" mb="24px">
                    Farms & Staking
                </Heading>
                <CardImage src="/images/SUGAR/mint.png" alt="cake logo" width={64} height={64}/>
                <Block>
                    <Label>MINT in Wallet</Label>
                    <CakeWalletBalance cakeBalance={mintBalance}/>
                    <Label>~${(MINTPrice * mintBalance).toFixed(2)}</Label>
                </Block>
                <Button onClick={addWatchMintToken} mb="sm">
                    +{' '}
                    <img
                        style={{marginLeft: 8}}
                        width={16}
                        src="https://raw.githubusercontent.com/blzd-dev/blzd-frontend/master/public/images/wallet/metamask.png"
                        alt="metamask logo"
                    />
                </Button>
            </CardBody>

            <CardBody>
                <Heading size="xl" mb="24px">
                    SUGAR
                </Heading>
                <CardImage src="/images/SUGAR/2.png" alt="cake logo" width={64} height={64}/>
                <Block>
                    <Label>{TranslateString(544, 'SUGAR to Harvest')}</Label>
                    <CakeHarvestBalance earningsSum={earningsSumSugar}/>
                    <Label>~${(SUGARPrice * earningsSumSugar).toFixed(2)}</Label>
                </Block>
                <Block>
                    <Label>SUGAR in Wallet</Label>
                    <CakeWalletBalance cakeBalance={cakeBalance}/>
                    <Label>~${(SUGARPrice * cakeBalance).toFixed(2)}</Label>
                </Block>
                <Button onClick={addWatchBlzdToken} mb="sm">
                    +{' '}
                    <img
                        style={{marginLeft: 8}}
                        width={16}
                        src="https://raw.githubusercontent.com/blzd-dev/blzd-frontend/master/public/images/wallet/metamask.png"
                        alt="metamask logo"
                    />
                </Button>

            </CardBody>

            <CardBody>
                <Heading size="xl" mb="24px">
                    TEASPORT
                </Heading>
                <CardImage src="/images/SUGAR/TeaSportV1.png" alt="cake logo" width={64} height={64}/>
                <Block>
                    <Label>TEASPORT to Harvest</Label>
                    <CakeHarvestBalance earningsSum={earningsSum}/>
                    <Label>~${(TEASPORTPrice * earningsSum).toFixed(2)}</Label>
                </Block>
                <Block>
                    <Label>TEASPORT in Wallet</Label>
                    <CakeWalletBalance cakeBalance={teasportBalance}/>
                    <Label>~${(TEASPORTPrice * teasportBalance).toFixed(2)}</Label>
                </Block>
                <Button onClick={addWatchTeaSportToken} mb="sm">
                    +{' '}
                    <img
                        style={{marginLeft: 8}}
                        width={16}
                        src="https://raw.githubusercontent.com/blzd-dev/blzd-frontend/master/public/images/wallet/metamask.png"
                        alt="metamask logo"
                    />
                </Button>
            </CardBody>
        </StyledFarmStakingCard>
    )
}

export default FarmedStakingCard
