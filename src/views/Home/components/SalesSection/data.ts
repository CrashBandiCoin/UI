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
  headingText: 'SUGAR Train. Farm. Earn.',
  bodyText:
    'SUGAR is the first token dedicated to DeFi education. Learn all DeFi features through SUGAR raffle, IFO, farming, DeFi trainings, partners and more',
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
  headingText: 'MINT Vote. Fund Associations. Earn.',
  bodyText:
    'MINT is the first token caring about funding Associations As the central TeaSwap token, use it to vote as a DAO for TeaSwap main decisions & as a key to access TeaSwap\'s TeaParties.',
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
  headingText: 'TEASPORT No loss Bet. Play. Earn',
  bodyText: 'TeaSport is the first token devoted to sport/e-sport with interactions in real time with sports results during TeaSwap\'s SportParties.',
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
