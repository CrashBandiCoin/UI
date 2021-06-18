import {MenuEntry} from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
    {
        label: 'Home',
        icon: 'HomeIcon',
        href: '/',
    },
    {
        label: 'MINT',
        icon: 'MintIcon',
        items: [
            {
                label: 'Exchange',
                icon: 'TradeIcon',
                href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f',
            },
            {
                label: 'Liquidity',
                icon: 'LiquidityIcon',
                href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f',
            },
            {
                label: 'Farms',
                icon: 'FarmsIcon',
                href: '/farms/mint',
            },
            {
                label: 'Pools',
                icon: 'PoolsIcon',
                href: '/pools/mint',
            },
            {
                label: 'Chart',
                icon: 'ChartIcon',
                href: 'https://dex.guru/token/0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f-bsc',
            },

        ],
    },

    {
        label: 'SUGAR',
        icon: 'SugarIcon',
        items: [
            {
                label: 'Exchange',
                href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x41AA9F842AF935cC71252C0dE4BFF13F821546b8',
            },
            {
                label: 'Liquidity',
                href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x41AA9F842AF935cC71252C0dE4BFF13F821546b8',
            },
            {
                label: 'Farms',
                href: '/farms/sugar',
            },
            {
                label: 'Pools',
                href: '/pools/sugar',
            },
            {
                label: 'Chart',
                href: 'https://dex.guru/token/0x41AA9F842AF935cC71252C0dE4BFF13F821546b8-bsc',
            },
        ],
    },

    {
        label: 'Token Event',
        icon: 'ListingsIcon',
        items: [
            {
                label: 'Exchange',
                href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=',
            },
            {
                label: 'Liquidity',
                href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x41AA9F842AF935cC71252C0dE4BFF13F821546b8',
            },
            {
                label: 'Farms',
                href: '/farms/sugar',
            },
            {
                label: 'Pools',
                href: '/pools/sugar',
            },
            {
                label: 'Chart',
                href: 'https://dex.guru/token/-bsc',
            },
        ],
    },
    {
        label: 'LP swap',
        icon: 'TradeIcon',
        href: '/lpswap',
    },

    {
        label: 'Vote',
        icon: 'TicketIcon',
        href: 'https://vote.tea-swap.finance',
    },
    // {
    //   label: 'NFT',
    //   icon: 'NftIcon',
    //   href: '/nft',
    // },

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
        label: 'Docs',
        icon: 'DocsIcon',
        href: 'https://docs.tea-swap.finance',
    },
    {
        label: 'Audit by TechRate',
        icon: 'AuditIcon',
        href: 'https://github.com/Tea-Swap/contract/blob/master/audits/techRate/Sugar_MasterTea.pdf',
    },
]

export default config
