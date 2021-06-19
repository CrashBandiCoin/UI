import contracts from './contracts'
import { FarmConfig, QuoteToken, ContractType } from './types'

const farms: FarmConfig[] = [
  {
    id: 0,
    pid: 0, // TODO fixe the correct APR
    type: ContractType.Sugar,
    risk: 5,
    lpSymbol: 'SUGAR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8e4848DC6535742824d19dA9F19901D01d9f6988',

    },
    tokenSymbol: 'SUGAR',
    tokenAddresses: {
      97: '',
      56: '0x41AA9F842AF935cC71252C0dE4BFF13F821546b8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    id: 1,
    pid: 0, // TODO fixe the correct APR
    type: ContractType.Mint,
    risk: 5,
    lpSymbol: 'MINT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7c5e62E0173C94E768D5Af663C99E5b8B296767d',
    },
    tokenSymbol: 'MINT',
    tokenAddresses: {
      97: '',
      56: '0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    id: 2,
    pid: 1,
    type: ContractType.Sugar,
    risk: 5,
    lpSymbol: 'SUGAR-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x21cb4ED35c47B56478cc7c22A24127B8e9Bc01c2',
    },
    tokenSymbol: 'SUGAR',
    tokenAddresses: {
      97: '',
      56: '0x41AA9F842AF935cC71252C0dE4BFF13F821546b8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    id: 3,
    pid: 1,
    type: ContractType.Mint,
    risk: 5,
    lpSymbol: 'MINT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x52640B938b033DbA2DEE3eeBF05C72DBD85258a7',
    },
    tokenSymbol: 'MINT',
    tokenAddresses: {
      97: '',
      56: '0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    id: 4,
    pid: 2,
    type: ContractType.Sugar,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    id: 5,
    pid: 2,
    type: ContractType.Mint,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    id: 6,
    pid: 3,
    type: ContractType.Sugar,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'SUGAR',
    lpAddresses: {
      97: '',
      56: '0x21cb4ED35c47B56478cc7c22A24127B8e9Bc01c2', // SUGAR-BUSD LP
    },
    tokenSymbol: 'SUGAR',
    tokenAddresses: {
      97: '',
      56: '0x41aa9f842af935cc71252c0de4bff13f821546b8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    id: 7,
    pid: 3,
    type: ContractType.Mint,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'MINT',
    lpAddresses: {
      97: '',
      56: '0x52640B938b033DbA2DEE3eeBF05C72DBD85258a7', // MINT-BUSD LP
    },
    tokenSymbol: 'MINT',
    tokenAddresses: {
      97: '',
      56: '0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    id: 8,
    pid: 4,
    type: ContractType.Sugar,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    id: 9,
    pid: 8,
    type: ContractType.Mint,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    id: 10,
    pid: 5,
    type: ContractType.Sugar,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    id: 11,
    pid: 10,
    type: ContractType.Mint,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    id: 12,
    pid: 6,
    type: ContractType.Sugar,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x52640B938b033DbA2DEE3eeBF05C72DBD85258a7', // SUGAR-BUSD LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    id: 13,
    pid: 9,
    type: ContractType.Mint,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x52640B938b033DbA2DEE3eeBF05C72DBD85258a7', // SUGAR-BUSD LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    id: 14,
    pid: 7, // TODO fixe the correct APR
    type: ContractType.Sugar,
    risk: 2,
    lpSymbol: 'BNB-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 8,
  //   risk: 5,
  //   // isTokenOnly: true,
  //   lpSymbol: 'BTCB-BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 9,
  //   risk: 5,
  //   // isTokenOnly: true,
  //   lpSymbol: 'ETH-BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7213a321F1855CF1779f42c0CD85d3D95291D34C', // ETH-BUSD LP
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    id: 15,
    pid: 11,
    type: ContractType.Sugar,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0x7213a321F1855CF1779f42c0CD85d3D95291D34C', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,  
    quoteTokenAdresses: contracts.busd,
  },
  {
    id: 16,
    pid: 10,
    type: ContractType.Sugar,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    id: 17,
    pid: 11,
    risk: 5,
    type: ContractType.Mint,
    lpSymbol: 'MINT-SUGAR LP',
    lpAddresses: {
      97: '',
      56: '0x45cE45a7d69084c1E3E7Ff29B634Bcb872f62d88',
    },
    tokenSymbol: 'MINT',
    tokenAddresses: {
      97: '',
      56: '0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    id: 18,
    pid: 13,
    risk: 5,
    type: ContractType.Sugar,
    lpSymbol: 'MINT-SUGAR LP',
    lpAddresses: {
      97: '',
      56: '0x45cE45a7d69084c1E3E7Ff29B634Bcb872f62d88',
    },
    tokenSymbol: 'MINT',
    tokenAddresses: {
      97: '',
      56: '0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    id: 19,
    pid: 14,
    risk: 5,
    type: ContractType.Sugar,
    lpSymbol: 'MINT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7c5e62E0173C94E768D5Af663C99E5b8B296767d',
    },
    tokenSymbol: 'MINT',
    tokenAddresses: {
      97: '',
      56: '0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    id: 20,
    pid: 15,
    risk: 5,
    type: ContractType.Sugar,
    lpSymbol: 'MINT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x52640B938b033DbA2DEE3eeBF05C72DBD85258a7',
    },
    tokenSymbol: 'MINT',
    tokenAddresses: {
      97: '',
      56: '0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    id: 21,
    pid: 16,
    type: ContractType.Sugar,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'MINT',
    lpAddresses: {
      97: '',
      56: '0x52640B938b033DbA2DEE3eeBF05C72DBD85258a7', // MINT-BUSD LP
    },
    tokenSymbol: 'MINT',
    tokenAddresses: {
      97: '',
      56: '0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    id: 22,
    pid: 0,
    type: ContractType.TeaSport,
    risk: 5,
    lpSymbol: 'TeaSport-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7ca18c58c6d890201172800eb0508450ae46e4f5', // TeaSport-BUSD LP
    },
    tokenSymbol: 'TeaSport',
    tokenAddresses: {
      97: '',
      56: '0xFc5e7Bed6abA672c6d435715bA931fB75EebFd2A',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    id: 23,
    pid: 1,
    type: ContractType.TeaSport,
    risk: 5,
    lpSymbol: 'TeaSport-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x154b10d06c8739Df799510a338AC7e61391011F6', // TeaSport-BUSD LP
    },
    tokenSymbol: 'TeaSport',
    tokenAddresses: {
      97: '',
      56: '0xFc5e7Bed6abA672c6d435715bA931fB75EebFd2A',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    id: 24,
    pid: 2,
    type: ContractType.TeaSport,
    risk: 5,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },


  {
    id: 32,
    pid: 12,
    type: ContractType.TeaSport,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    id: 24,
    pid: 8,
    type: ContractType.TeaSport,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    id: 25,
    pid: 9,
    type: ContractType.TeaSport,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x52640B938b033DbA2DEE3eeBF05C72DBD85258a7', // TeaSport-BUSD LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    id: 25,
    pid: 10,
    type: ContractType.TeaSport,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'TeaSport',
    lpAddresses: {
      97: '',
      56: '0x154b10d06c8739Df799510a338AC7e61391011F6', // SUGAR-BUSD LP
    },
    tokenSymbol: 'TeaSport',
    tokenAddresses: {
      97: '',
      56: '0xFc5e7Bed6abA672c6d435715bA931fB75EebFd2A',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    id: 26,
    pid: 3,
    type: ContractType.TeaSport,
    risk: 5,
    lpSymbol: 'MINT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7c5e62E0173C94E768D5Af663C99E5b8B296767d',
    },
    tokenSymbol: 'MINT',
    tokenAddresses: {
      97: '',
      56: '0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    id: 27,
    pid: 4,
    type: ContractType.TeaSport,
    risk: 5,
    lpSymbol: 'MINT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x52640B938b033DbA2DEE3eeBF05C72DBD85258a7',
    },
    tokenSymbol: 'MINT',
    tokenAddresses: {
      97: '',
      56: '0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    id: 29,
    pid: 5,
    type: ContractType.TeaSport,
    risk: 5,
    lpSymbol: 'SUGAR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8e4848DC6535742824d19dA9F19901D01d9f6988',

    },
    tokenSymbol: 'SUGAR',
    tokenAddresses: {
      97: '',
      56: '0x41AA9F842AF935cC71252C0dE4BFF13F821546b8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    id: 30,
    pid: 6,
    type: ContractType.TeaSport,
    risk: 5,
    lpSymbol: 'SUGAR-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x21cb4ED35c47B56478cc7c22A24127B8e9Bc01c2',
    },
    tokenSymbol: 'SUGAR',
    tokenAddresses: {
      97: '',
      56: '0x41AA9F842AF935cC71252C0dE4BFF13F821546b8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    id: 31,
    pid: 11,
    risk: 5,
    type: ContractType.TeaSport,
    lpSymbol: 'MINT-SUGAR LP',
    lpAddresses: {
      97: '',
      56: '0x45cE45a7d69084c1E3E7Ff29B634Bcb872f62d88',
    },
    tokenSymbol: 'MINT',
    tokenAddresses: {
      97: '',
      56: '0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },




  // {
  //   pid: 3,
  //   risk: 1,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 4,
  //   risk: 2,
  //   lpSymbol: 'BTCB-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 5,
  //   risk: 2,
  //   lpSymbol: 'ETH-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 6,
  //   risk: 1,
  //   lpSymbol: 'DAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 7,
  //   risk: 1,
  //   lpSymbol: 'USDC-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 9,
  //   risk: 3,
  //   lpSymbol: 'DOT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 10,
  //   risk: 4,
  //   lpSymbol: 'CAKE-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 11,
  //   risk: 4,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 12,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'SUGAR',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // SUGAR-BUSD LP
  //   },
  //   tokenSymbol: 'SUGAR',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 13,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // SUGAR-BUSD LP (BUSD-BUSD will ignore)
  //   },
  //   tokenSymbol: 'BUSD',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 14,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
  //   },
  //   tokenSymbol: 'WBNB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 15,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 16,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'BTCB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 17,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'ETH',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 18,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'DAI',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 19,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 20,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'DOT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e', // DOT-BUSD LP
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 21,
  //   risk: 4,
  //   isTokenOnly: true,
  //   lpSymbol: 'CAKE',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 22,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'BSCX',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa32a983a64ce21834221aa0ad1f1533907553136', // BSCX-BUSD LP
  //   },
  //   tokenSymbol: 'BSCX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 23,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'AUTO',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4d0228ebeb39f6d2f29ba528e2d15fc9121ead56', // AUTO-BNB LP
  //   },
  //   tokenSymbol: 'AUTO',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xa184088a740c695e156f91f5cc086a06bb78b827',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
]
const farms1 = farms.filter((farm) => farm.type === 'Mint')
const farms2 = farms.filter((farm) => farm.type === 'Sugar')
const farms3 = farms.filter((farm) => farm.type === 'TeaSport')

farms1.sort((a, b) => (a.pid > b.pid) ? 1 : -1)
farms2.sort((a, b) => (a.pid > b.pid) ? 1 : -1)
farms3.sort((a, b) => (a.pid > b.pid) ? 1 : -1)

export default [...farms1, ...farms2, ...farms3]