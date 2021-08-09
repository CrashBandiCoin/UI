import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Skeleton } from '@pancakeswap-libs/uikit'
import { Address } from 'config/constants/types'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import ApyButton from '../VaultCard/ApyButton'

export interface ApyProps {
  value: BigNumber
  multiplier: string
  lpLabel: string
  tokenAddress?: Address
  quoteTokenAddress?: Address
  quoteTokenSymbol?: string
  cakePrice: BigNumber
  originalValue: number
  hideButton?: boolean
}

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};

  button {
    width: 20px;
    height: 20px;

    svg {
      path {
        fill: ${({ theme }) => theme.colors.textSubtle};
      }
    }
  }
`

const ApyWrapper = styled.div`
  min-width: 60px;
  text-align: left;
`

const Apy: React.FC<ApyProps> = ({
  value,
  lpLabel,
  tokenAddress,
  quoteTokenSymbol,
  quoteTokenAddress,
  cakePrice,
  originalValue,
  hideButton = false,
}) => {
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses: quoteTokenAddress, quoteTokenSymbol, tokenAddresses: tokenAddress })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  let apy = null;
  if (lpLabel === 'SUGAR')
    apy = new BigNumber(value);
  else if (lpLabel === 'CAKE')
    apy = new BigNumber(0.947);
  else 
    apy = new BigNumber(0.7021);

  const farmAPY = apy && apy.times(new BigNumber(100)).toNumber().toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  if (!originalValue) {
    return (
        <Container>
          <ApyWrapper>
              <Skeleton width={60} />
          </ApyWrapper>
        </Container>
      )
  }
  return originalValue !== 0 ? (
    <Container>
      <>
        <ApyWrapper>{farmAPY}%</ApyWrapper>
        {!hideButton && (
          <ApyButton lpLabel={lpLabel} addLiquidityUrl={addLiquidityUrl} cakePrice={cakePrice} apy={value} />
        )}
      </>
    </Container>
  ) : (
    <Container>
      <ApyWrapper>{farmAPY}%</ApyWrapper>
    </Container>
  )
}

export default Apy