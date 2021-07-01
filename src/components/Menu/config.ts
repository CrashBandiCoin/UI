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
                label: 'Farms',
                href: '/farms/mint',
                status: {
                    text: "INACTIVE",
                    color: "failure",
                }
            },
            {
                label: 'Pools',
                href: '/pools/mint',
                status: {
                    text: "INACTIVE",
                    color: "failure",
                }
            },
            {
                label: 'Exchange',
                href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f',
            },
            {
                label: 'Chart',
                href: 'https://dex.guru/token/0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f-bsc',
            },

        ],
    },
    {
        label: 'SUGAR',
        icon: 'SugarIcon',
        items: [
            {
                label: 'Farms',
                href: '/farms/sugar',
            },
            {
                label: 'Pools',
                href: '/pools/sugar',
            },
            {
                label: 'Exchange',
                href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x41AA9F842AF935cC71252C0dE4BFF13F821546b8',
            },
            {
                label: 'Chart',
                href: 'https://dex.guru/token/0x41AA9F842AF935cC71252C0dE4BFF13F821546b8-bsc',
            },
        ],
    },
    {
        label: 'TeaSport',
        icon: 'TeaSportV1Icon',
        items: [
            {
                label: 'UEFA EURO',
                href: '/euro',
                status: {
                    text: "LIVE",
                    color: "text",
                },
            },
            {
                label: 'OLYMPIC GAMES',
                href: '',
                status: {
                    text: "SOON",
                    color: "binance",
                },
            },
            {
                label: 'Farms',
                href: '/farms/teasport',
            },
            {
                label: 'Pools',
                href: '/pools/teasport',
            },
            {
                label: 'Exchange',
                href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xFc5e7Bed6abA672c6d435715bA931fB75EebFd2A',
            },
            {
                label: 'Chart',
                href: 'https://dex.guru/token/0xFc5e7Bed6abA672c6d435715bA931fB75EebFd2A-bsc',
            },
        ],
    },
    {
        label: 'Zap',
        icon: 'TradeIcon',
        href: '/zap',
    },
    {
        label: 'Vote',
        icon: 'ReferralIcon',
        href: 'https://snapshot.org/#/tea-swap.eth',
    },
    {
        label: 'Raffle',
        icon: 'TicketIcon',
        href: '/raffle',
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
            {
                label: 'Website',
                href: 'https://tea-swap.finance/',
            },
        ],
    },
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
