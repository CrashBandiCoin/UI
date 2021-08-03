import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
import { Route, useRouteMatch, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Image, Heading, RowType, Toggle, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { orderBy } from 'lodash'
import useRefresh from 'hooks/useRefresh'
import useI18n from 'hooks/useI18n'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config'
import { QuoteToken } from 'config/constants/types'
import {
  useFarms,
  useVaults,
  usePriceBnbBusd,
  usePriceCakeBusd,
  usePriceMintBusd,
  usePriceTeaSportBusd,
  useVaultTotalValue
} from 'state/hooks'
import { fetchVaultUserDataAsync } from 'state/actions'
import { getBalanceNumber } from 'utils/formatBalance'
import Page from 'components/layout/Page'
import PageHeader from 'components/PageHeader'
import SearchInput from 'components/SearchInput'
import Select, { OptionProps } from 'components/Select/Select'
import CardValue from 'views/Home/components/CardValue'
import { Farm } from 'state/types'
import { RowProps } from './components/VaultTable/Row'
import Table from './components/VaultTable/VaultTable'
import FarmTabButtons from './components/VaultTabButtons'
import { DesktopColumnSchema, ViewMode } from './components/types'

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
  liquidity?: BigNumber
}

export interface FarmsProps{
  tokenMode?: boolean
  type?: string
}

const ControlContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 32px;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px 32px;
    margin-bottom: 0;
  }
`

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${Text} {
    margin-left: 8px;
  }
`

const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
`

const TextWrapper = styled.div`
  text-align: center;
  margin-bottom: 25px;
`

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    padding: 0;
  }
`

const ViewControls = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
`

const StyledImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 58px;
`

const NUMBER_OF_FARMS_VISIBLE = 12

const Vaults: React.FC<FarmsProps> = (vaultsProps) => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const { pathname } = useLocation()
  const farmsLP = useVaults()
  const poolsLP = useFarms()
  const cakePrice = usePriceCakeBusd()
  const mintPrice = usePriceMintBusd()
  const teasportPrice = usePriceTeaSportBusd()
  const bnbPrice = usePriceBnbBusd()
  const { account }: { account: string } = useWallet()
  const {tokenMode, type} = vaultsProps;
  const tvl = useVaultTotalValue()

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchVaultUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [query, setQuery] = useState('')
  const [sortOption, setSortOption] = useState('tvl')
  const [platformOption, setPlatformOption] = useState('all')

  const userDataReady = true

  const isArchived = pathname.includes('archived')
  const isInactive = pathname.includes('history')
  const isActive = !isInactive && !isArchived

  const [stakedOnly, setStakedOnly] = useState(!isActive)
  const [activeOnly, setActiveOnly] = useState(!isActive)

  const activeFarms = farmsLP.filter((farm) => farm.multiplier !== '0X' && farm.id !== 4)
  const inactiveFarms = farmsLP.filter((farm) =>  farm.multiplier === '0X' && farm.id !== 4)

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  const stakedInactiveFarms = inactiveFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance[farm.type]).isGreaterThan(0),
  )

  const farmsList = useCallback(
    (farmsToDisplay: Farm[]): FarmWithStakedValue[] => {
      let farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        let cakeRewardPerBlock = null
        let fetchedFarm = poolsLP.filter(pool => pool.isTokenOnly && pool.lpSymbol === farm.lpSymbol && pool.type === farm.type)[0]
        if (!fetchedFarm) {
          fetchedFarm = farm
        }

        if (farm.type === 'Mint') {
          cakeRewardPerBlock = new BigNumber(farm.MintPerBlock || 1).times(new BigNumber(farm.poolWeight)) .div(new BigNumber(10).pow(18))
        } else if (farm.type === 'TeaSport') {
          cakeRewardPerBlock = new BigNumber(farm.TeaSportPerBlock || 1).times(new BigNumber(farm.poolWeight)).div(new BigNumber(10).pow(18))
        } else {
          cakeRewardPerBlock = new BigNumber(fetchedFarm.SUGARPerBlock || 1).times(new BigNumber(fetchedFarm.poolWeight)) .div(new BigNumber(10).pow(18))
        }

        const totalLiquidity = new BigNumber(fetchedFarm.lpTotalInQuoteToken).times(fetchedFarm.quoteToken.busdPrice)

        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = null
        if (farm.type === 'Mint') {
          apy = mintPrice.times(cakeRewardPerYear);
        } else if (farm.type === 'TeaSport') {
          apy = teasportPrice.times(cakeRewardPerYear);
        } else {
          apy = new BigNumber(fetchedFarm.tokenPriceVsQuote).times(cakeRewardPerYear);
        }

        let totalValue = new BigNumber(fetchedFarm.lpTotalInQuoteToken || 0);

        if (apy === null) {
          apy = new BigNumber(0)
        }

        if (farm.quoteToken.symbol === QuoteToken.BNB) {
          totalValue = totalValue.times(bnbPrice);
        }
        
        if(totalValue.comparedTo(0) > 0){
          apy = apy.div(totalValue);
        }

        return { ...farm, apy, liquidity: totalLiquidity }
      })
      
      if (query) {
        const lowercaseQuery = query.toLowerCase()
        farmsToDisplayWithAPY = farmsToDisplayWithAPY.filter((farm: FarmWithStakedValue) => {
          return farm.lpSymbol.toLowerCase().includes(lowercaseQuery)
        })
      }

      return farmsToDisplayWithAPY
    },
    [bnbPrice, mintPrice, teasportPrice, poolsLP, query],
  )

  const loadMoreRef = useRef<HTMLDivElement>(null)

  const [numberOfFarmsVisible, setNumberOfFarmsVisible] = useState(NUMBER_OF_FARMS_VISIBLE)
  const [observerIsSet, setObserverIsSet] = useState(false)

  const farmsStakedMemoized = useMemo(() => {
    let farmsStaked = []

    const sortFarms = (farms: FarmWithStakedValue[]): FarmWithStakedValue[] => {
      switch (sortOption) {
        case 'apy':
          return orderBy(farms, (farm: FarmWithStakedValue) => farm.apy, 'desc')
        case 'multiplier':
          return orderBy(
            farms,
            (farm: FarmWithStakedValue) => (farm.multiplier ? Number(farm.multiplier.slice(0, -1)) : 0),
            'desc',
          )
        case 'earning':
          return orderBy(
            farms,
            (farm: FarmWithStakedValue) => (farm.userData ? Number(farm.userData.earnings) : 0),
            'desc',
          )
        case 'latest':
          return orderBy(farms, (farm: FarmWithStakedValue) => Number(farm.liquidity), 'desc')
        default:
          return farms
      }
    }

    if (isActive) {
      farmsStaked = stakedOnly ? farmsList(stakedOnlyFarms) : farmsList(activeFarms)
    }
    if (isInactive) {
      farmsStaked = stakedOnly ? farmsList(stakedInactiveFarms) : farmsList(inactiveFarms)
    }

    if (platformOption !== 'all') {
      farmsStaked = farmsStaked.filter(farm => farm.type.toLowerCase() === platformOption)
    }

    if (farmsStaked.length < numberOfFarmsVisible) {
      setNumberOfFarmsVisible(farmsStaked.length)
    }
    return sortFarms(farmsStaked).slice(0, numberOfFarmsVisible)
  }, [
    sortOption,
    activeFarms,
    farmsList,
    inactiveFarms,
    isActive,
    isInactive,
    stakedInactiveFarms,
    stakedOnly,
    stakedOnlyFarms,
    numberOfFarmsVisible,
    platformOption
  ])

  useEffect(() => {
    const showMoreFarms = (entries) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        setNumberOfFarmsVisible((farmsCurrentlyVisible) => farmsCurrentlyVisible + NUMBER_OF_FARMS_VISIBLE)
      }
    }

    if (!observerIsSet) {
      const loadMoreObserver = new IntersectionObserver(showMoreFarms, {
        rootMargin: '0px',
        threshold: 1,
      })
      loadMoreObserver.observe(loadMoreRef.current)
      setObserverIsSet(true)
    }
  }, [farmsStakedMemoized, observerIsSet])

  const rowData = farmsStakedMemoized.map((farm) => {
    const tokenAddress = farm.token.address[chainId]
    const quoteTokenAddress = farm.quoteToken.address[chainId]

    const lpLabel = farm.lpSymbol && farm.lpSymbol.split(' ')[0].toUpperCase().replace('PANCAKE', '')

    const row: RowProps = {
      apy: {
        value: farm.apy,
        multiplier: farm.multiplier,
        lpLabel,
        tokenAddress: farm.quoteToken.address,
        quoteTokenAddress: farm.quoteToken.address,
        quoteTokenSymbol: farm.quoteToken.symbol,
        cakePrice,
        originalValue: farm.apy.toNumber(),
      },
      farm: {
        label: lpLabel,
        id: farm.id,
        pid: farm.pid,
        token: farm.token,
        quoteToken: farm.quoteToken,
        isTokenOnly: farm.isTokenOnly,
        type: farm.type
      },
      earned: {
        earnings: getBalanceNumber(new BigNumber(farm.userData && farm.userData.earnings ? farm.userData.earnings : 0)),
        pid: farm.pid,
      },
      liquidity: {
        liquidity: farm.liquidity,
      },
      multiplier: {
        multiplier: farm.multiplier,
      },
      details: farm,
    }

    return row
  })

  const renderContent = (): JSX.Element => {
    const columnSchema = DesktopColumnSchema

    const columns = columnSchema.map((column) => ({
      id: column.id,
      name: column.name,
      label: column.label,
      sort: (a: RowType<RowProps>, b: RowType<RowProps>) => {
        switch (column.name) {
          case 'vault':
            return b.id - a.id
          case 'apy':
            if (a.original.apy.value && b.original.apy.value) {
              return Number(a.original.apy.value) - Number(b.original.apy.value)
            }
            return 0
          case 'bonus':
            return a.original.earned.earnings - b.original.earned.earnings
          default:
            return 1
        }
      },
      sortable: column.sortable,
    }))

    return <Table data={rowData} columns={columns} userDataReady={userDataReady} />
  }

  const handleSortOptionChange = (option: OptionProps): void => {
    setSortOption(option.value)
  }

  const handlePlatformOptionChange = (option: OptionProps): void => {
    setPlatformOption(option.value)
  }

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <>
      <PageHeader>
        <Heading as="h1" scale="xl" color="secondary" mb="24px">
          Sugar Vaults (Auto-Compounder)
        </Heading>
        <Heading scale="lg" color="text">
          Stake tokens for farm rewards plus Sugar rewards
        </Heading>
        <Heading scale="md" color="text">
          <CardValue value={tvl.toNumber()} prefix="$" decimals={2} fontSize='18px' />
        </Heading>
      </PageHeader>
      <Page>
        <ControlContainer>
          <FilterContainer>
            <LabelWrapper>
              <Text textTransform="uppercase">Platforms</Text>
              <Select
                options={[
                  {
                    label: 'ALL',
                    value: 'all',
                  },
                  {
                    label: 'PCS',
                    value: 'pcs',
                  },
                  {
                    label: 'SUGAR',
                    value: 'sugar',
                  },
                ]}
                onChange={handlePlatformOptionChange}
              />
            </LabelWrapper>
            <LabelWrapper style={{ marginLeft: 16 }}>
              <Text textTransform="uppercase">Staked only</Text>
              <Toggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} scale="md" />
            </LabelWrapper>
            <LabelWrapper style={{ marginLeft: 16 }}>
              <Text textTransform="uppercase">Show inactive</Text>
              <Toggle checked={activeOnly} onChange={() => setActiveOnly(!activeOnly)} scale="md" />
            </LabelWrapper>
          </FilterContainer>

          <FilterContainer>
            <LabelWrapper>
              <Text textTransform="uppercase">Sort by</Text>
              <Select
                options={[
                  {
                    label: 'TVL',
                    value: 'liquidity',
                  },
                  {
                    label: 'Latest',
                    value: 'hot',
                  },
                  {
                    label: 'Earnings',
                    value: 'earning',
                  },
                  {
                    label: 'APY',
                    value: 'apy',
                  },
                  {
                    label: 'Multipliers',
                    value: 'multiplier',
                  },
                ]}
                onChange={handleSortOptionChange}
              />
            </LabelWrapper>
            <LabelWrapper style={{ marginLeft: 16 }}>
              <Text textTransform="uppercase">Search</Text>
              <SearchInput onChange={handleChangeQuery} placeholder="Search Vaults" />
            </LabelWrapper>
          </FilterContainer>
        </ControlContainer>
        {renderContent()}
        <div ref={loadMoreRef} />
      </Page>
    </>
  )
}

export default Vaults
