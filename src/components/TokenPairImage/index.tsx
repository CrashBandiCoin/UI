import React from 'react'
import {
  TokenPairImage as UIKitTokenPairImage,
  TokenPairImageProps as UIKitTokenPairImageProps,
} from '@pancakeswap-libs/uikit'
import contracts from 'config/constants/contracts'
import { Token } from 'config/constants/types'
import { getAddress } from 'utils/addressHelpers'

interface TokenPairImageProps extends Omit<UIKitTokenPairImageProps, 'primarySrc' | 'secondarySrc'> {
  primaryToken: Token
  secondaryToken: Token
}

const getImageUrlFromToken = (token: Token) => {
  return `/images/farms/${token.symbol.toLowerCase()}.png`
}

const TokenPairImage: React.FC<TokenPairImageProps> = ({ primaryToken, secondaryToken, ...props }) => {
  return (
    <UIKitTokenPairImage
      primarySrc={getImageUrlFromToken(primaryToken)}
      secondarySrc={getImageUrlFromToken(secondaryToken)}
      {...props}
    />
  )
}

export default TokenPairImage
