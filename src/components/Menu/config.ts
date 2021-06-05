import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Liquidity',
    icon: 'LiquidityIcon',
    items: [
      {
        label: 'Add MINT liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0xCaEcE7B6A662b0FcABDb7d760778fff992365f66',
      },
      {
        label: 'Add SUGAR liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x41AA9F842AF935cC71252C0dE4BFF13F821546b8',
      },
    ],
  },
  {
    label: 'LP swap',
    icon: 'TradeIcon',
    href: '/zap',
  },

  {
    label: 'Buy MINT',
    icon: 'MintIcon',
    href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xCaEcE7B6A662b0FcABDb7d760778fff992365f66',
  },

  {
    label: 'Buy SUGAR',
    icon: 'SugarIcon',
    href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x41AA9F842AF935cC71252C0dE4BFF13F821546b8',
  },

  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },


  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Graph',
    icon: 'GraphIcon',
    items: [
      {
        label: 'Chart (MINT)',
        href: 'https://dex.guru/token/0xcaece7b6a662b0fcabdb7d760778fff992365f66-bsc',
      },
      {
        label: 'Chart (SUGAR)',
        href: 'https://dex.guru/token/0x41AA9F842AF935cC71252C0dE4BFF13F821546b8-bsc',
      },
      // {
      //   label: 'Charts on Dex Tools (SUGAR)',
      //   href: 'https://www.dextools.io/app/pancakeswap/pair-explorer/0x21cb4ed35c47b56478cc7c22a24127b8e9bc01c2',
      // },
    ],
  },
  {
    label: 'Listing',
    icon: 'ListingsIcon',
    items: [
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/binance-smart-chain/defi/teaswap',
      },
      {
        label: 'IcoHolder',
        href: 'https://icoholder.com/fr/teaswap-1001257',
      },
      {
        label: 'Coinhut',
        href: 'https://coinhunt.cc/coin/2006554088',
      },
      {
        label: 'Coinsniper',
        href: 'https://coinsniper.net/coin/1473',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Docs',
      //   href: 'https://goosedefi.gitbook.io/goose-finance/',
      // },
      {
        label: 'Website',
        href: 'https://tea-swap.finance/',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
  // {
  //   label: 'Roadmap',
  //   icon: 'RoadmapIcon',
  //   href: '/roadmap',
  // },
  {
    label: 'Audit by TechRate',
    icon: 'AuditIcon',
    href: 'https://github.com/Tea-Swap/contract/blob/master/audits/techRate/Sugar_MasterTea.pdf',
  },
]

export default config
