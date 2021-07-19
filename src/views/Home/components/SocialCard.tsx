import React from 'react'
import {Card, CardBody, Heading, Text} from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import {Timeline} from 'react-twitter-widgets'
import {getBalanceNumber} from 'utils/formatBalance'
import {useTotalSupply, useBurnedBalance} from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import {getCakeAddress} from 'utils/addressHelpers'
import CardValue from './CardValue'
import {useFarms} from '../../../state/hooks'
import DappRadar from "../img/dappradar.png";
import DexGuru from "../img/dexguru.png";
import CoinHut from "../img/coinhut.png";
import CoinSniper from "../img/coinsniper.png";
import IcoHolder from "../img/icoholder.png";
import Bscscan from "../img/bscscan.png";
import Dapp from "../img/dapp.png";
import Blockfolio from "../img/blockfolio.png";
import Delta from "../img/delta.png";


const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const Imgcenter = styled.img`
  display: inline-block;
  height: 100%;
  vertical-align: middle;
`

const SocialCard = () => {
    const TranslateString = useI18n()

    return (
        <StyledTwitterCard>
            <CardBody>
                <Heading size="xl" mb="24px">
                    {TranslateString(10006, 'Social listing')}
                </Heading>
                <div>
                    <a href="https://dappradar.com/binance-smart-chain/defi/teaswap">
                        <img
                            src={DappRadar}
                            loading="lazy"
                            width='100px'
                            alt=""
                        />
                    </a>

                    <a href="https://coinhunt.cc/coin/2006554088">
                        <img
                            src={CoinHut}
                            loading="lazy"
                            width='100px'
                            alt=""
                        />
                    </a>

                    <a href="https://coinsniper.net/coin/1473">
                        <img
                            src={CoinSniper}
                            loading="lazy"
                            width='100px'
                            alt=""
                        />
                    </a>

                    <a href="https://icoholder.com/fr/teaswap-1001257">
                        <img
                            src={IcoHolder}
                            loading="lazy"
                            width='100px'
                            alt=""
                        />
                    </a>

                    <a href="https://dex.guru/token/0x41AA9F842AF935cC71252C0dE4BFF13F821546b8-bsc">
                        <img
                            src={DexGuru}
                            loading="lazy"
                            width='100px'
                            alt=""
                        />
                    </a>
                    <a href="https://www.dapp.com/app/teaswap-finance">
                        <img
                            src={Dapp}
                            loading="lazy"
                            width='100px'
                            alt=""
                        />
                    </a>
                    <a href="https://blockfolio.com/">
                        <img
                            src={Blockfolio}
                            loading="lazy"
                            width='100px'
                            alt=""
                        />
                    </a>
                    <a href="https://delta.app/en">
                        <img
                            src={Delta}
                            loading="lazy"
                            width='100px'
                            alt=""
                        />
                    </a>
                </div>
            </CardBody>
        </StyledTwitterCard>
    )
}

export default SocialCard
