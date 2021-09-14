import {MenuEntry} from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
    {
        label: 'Home',
        icon: 'HomeIcon',
        href: '/',

    },
    {
        label: 'Yield Farming',
        icon: 'FarmIcon',
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
                label: 'Vaults',
                href: '/vaults',
            },
            
        ],
    },
    {
        label: 'SportParties',
        icon: 'BallonIcon',
        items: [
            {
                label: 'Champions League',
                href: '/SportParties/Championsleague',
            },
        ],
        status: {
            text: 'New',
            color: 'binance'
        },
    },

    {
        label: 'Exchange',
        icon: 'TradeIcon',
        items: [
            {
                label: 'MINT',
                href: 'https://pancakeswap.finance/swap?outputCurrency=0x2deb28ec61e7b6b4bba5f8398398330227cd293f',
            },
            {
                label: 'SUGAR',
                href: 'https://pancakeswap.finance/swap?outputCurrency=0x41AA9F842AF935cC71252C0dE4BFF13F821546b8',
            },
            {
                label: 'TEASPORT',
                href: 'https://pancakeswap.finance/swap?outputCurrency=0xFc5e7Bed6abA672c6d435715bA931fB75EebFd2A',
            },
        ],
    },
    
    
    {
        label: 'Vote',
        icon: 'ReferralIcon',
        href: 'https://snapshot.org/#/tea-swap.eth',
    },
    {
        label: 'Roadmap',
        icon: 'RoadmapIcon',
        href: '/roadmap',
    },
    {
        label: 'IFO',
        icon: 'IfoIcon',
        href: '/ifo',
    },
    {
        label: 'Raffles',
        icon: 'TicketIcon',
        href: '/raffle',
        items: [
            {
                label: 'Sugar',
                href: '/raffleSugar',
            },
            {
                label: 'Teasport',
                href: '/raffleTeasport',
            },
        ]
    },
    {
        label: 'Charts',
        icon: 'InfoIcon',
        href: '/chart',
        items: [
            {
                label: 'MINT',
                href: 'https://dex.guru/token/0x2deb28ec61e7b6b4bba5f8398398330227cd293f-bsc',
            },
            {
                label: 'SUGAR',
                href: 'https://dex.guru/token/0x41AA9F842AF935cC71252C0dE4BFF13F821546b8-bsc',
            },
            {
                label: 'TEASPORT',
                href: 'https://dex.guru/token/0xFc5e7Bed6abA672c6d435715bA931fB75EebFd2A-bsc',
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
