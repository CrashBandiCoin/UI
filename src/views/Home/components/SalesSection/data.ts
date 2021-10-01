import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'CAKE', alt: 'CAKE token' },
    ],
  },
  className: ''
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'PancakeSwap makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with cake token' },
    ],
  },
  className: ''

}

export const sugarSectionData: SalesSectionProps = {
  headingText: 'Train. Farm. Earn.',
  bodyText:
    ' Learn and master all the Defi tools. ',
  reverse: false,
  primaryButton: {
    to: 'https://pancakeswap.finance/swap?outputCurrency=0x41AA9F842AF935cC71252C0dE4BFF13F821546b8',
    text: 'Buy SUGAR',
    external: false,
  },
  secondaryButton: {
    to: 'https://teaswap.gitbook.io/teaswap/tokenomics-1/sugartoken',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/sugar/',
    attributes: [
      { src: 'coin', alt: 'Sugar token' },
    ],
  },
  className: ''

}

export const mintSectionData: SalesSectionProps = {
  headingText: 'Vote. Fund Associations. Earn.',
  bodyText: 'Govern and unlock all Teaswap’s Gamefi features',
  reverse: false,
  primaryButton: {
    to: 'https://pancakeswap.finance/swap?outputCurrency=0x2deb28ec61e7b6b4bba5f8398398330227cd293f',
    text: 'Buy MINT',
    external: false,
  },
  secondaryButton: {
    to: 'https://teaswap.gitbook.io/teaswap/tokenomics-1/minttoken',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/mint/',
    attributes: [
      { src: 'coin', alt: 'Mint token' },
    ],
  },
  className: ''

}

export const teasportSectionData: SalesSectionProps = {
  headingText: 'No loss Bet. Play. Earn',
  bodyText: 'Play and interact with sports events.',
  reverse:false,
  primaryButton: {
    to: 'https://pancakeswap.finance/swap?outputCurrency=0xFc5e7Bed6abA672c6d435715bA931fB75EebFd2A',
    text: 'Buy TEASPORT',
    external: false,
  },
  secondaryButton: {
    to: 'https://teaswap.gitbook.io/teaswap/tokenomics-1/teasport-token',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/teasport/',
    attributes: [
      { src: 'coin', alt: 'Teasport token' },
    ],
  },
  className: ''

}
