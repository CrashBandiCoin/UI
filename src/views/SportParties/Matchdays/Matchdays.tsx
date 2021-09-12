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
import { useMatchdays } from 'state/hooks'

import Page from 'components/layout/Page'
import PageHeader from 'components/PageHeader'
import SearchInput from 'components/SearchInput'
import Select, { OptionProps } from 'components/Select/Select'
import CardValue from 'views/Home/components/CardValue'
import { Matchday } from 'state/types'
import { RowProps } from './components/MatchdayTable/Row'
import Table from './components/MatchdayTable/MatchdayTable'
import FarmTabButtons from './components/MatchdayTabButtons'
import { DesktopColumnSchema, ViewMode } from './components/types'

export interface FarmWithStakedValue extends Matchday {
  apy?: BigNumber
  liquidity?: BigNumber
}

export interface MatchdaysProps {
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

const Matchdays: React.FC<MatchdaysProps> = (matchdaysProps) => {
  const TranslateString = useI18n()

  const matchdaysFromState = useMatchdays()

  const { tokenMode, type } = matchdaysProps

  const [query, setQuery] = useState('')
  const [sortOption, setSortOption] = useState('tvl')
  const [platformOption, setPlatformOption] = useState('all')

  const userDataReady = true

  const [activeOnly, setActiveOnly] = useState(true)

  const activeMatchdays = matchdaysFromState.filter((matchday) => matchday.multiplier !== '0X' && matchday.id !== 4)
  const inactiveMatchdays = matchdaysFromState.filter((matchday) => matchday.multiplier === '0X' && matchday.id !== 4)

  const stakedOnlyMatchdays = activeMatchdays.filter(
    (matchday) => matchday.userData && new BigNumber(matchday.userData.stakedBalance).isGreaterThan(0),
  )

  const stakedInactiveMatchdays = inactiveMatchdays.filter(
    (matchday) => matchday.userData && new BigNumber(matchday.userData.stakedBalance).isGreaterThan(0),
  )

  const matchdaysList = useCallback(
    (matchdaysToDisplay: Matchday[]): FarmWithStakedValue[] => {
      let matchdaysToDisplayWithAPY: FarmWithStakedValue[] = matchdaysToDisplay.map((matchday) => {
        let tokenPrice = sugarPrice
        if (matchday.id === 1) {
          tokenPrice = cakePrice
        } else if (matchday.id === 3) {
          tokenPrice = new BigNumber('22.13')
        }
        const totalLiquidity = new BigNumber(matchday.lpTotalInQuoteToken).times(tokenPrice)
        const lpTotlalInQuoteJSON = new BigNumber(matchday.lpTotalInQuoteToken).toJSON()
        const dailyApy = new BigNumber(matchday.apr).div(new BigNumber(365)).plus(new BigNumber(1))
        let apy = new BigNumber(dailyApy).pow(new BigNumber(365)).minus(new BigNumber(1))

        console.log(apy.toNumber())

        if (matchday.id === 2) {
          if (new BigNumber(matchday.apr).isGreaterThan(new BigNumber(0.4593))) {
            apy = new BigNumber(matchday.apr || 0)
          } else if (new BigNumber(matchday.apr || 0).isEqualTo(new BigNumber(0))) {
            apy = new BigNumber(0)
          } else {
            apy = new BigNumber(0.4593)
          }
        } else {
          apy = new BigNumber(matchday.apr)
        }

        return { ...matchday, apy, liquidity: totalLiquidity }
      })

      if (query) {
        const lowercaseQuery = query.toLowerCase()
        matchdaysToDisplayWithAPY = matchdaysToDisplayWithAPY.filter((matchday: FarmWithStakedValue) => {
          return matchday.lpSymbol.toLowerCase().includes(lowercaseQuery)
        })
      }

      return matchdaysToDisplayWithAPY
    },
    [query, cakePrice, sugarPrice],
  )

  const loadMoreRef = useRef<HTMLDivElement>(null)

  const [observerIsSet, setObserverIsSet] = useState(false)

  const matchdaysStakedMemoized = useMemo(() => {
    let matchdaysStaked = []

    const sortMatchdays = (matchdays: FarmWithStakedValue[]): FarmWithStakedValue[] => {
      switch (sortOption) {
        case 'apy':
          return orderBy(matchdays, (matchday: FarmWithStakedValue) => matchday.apy, 'desc')
        case 'multiplier':
          return orderBy(
            matchdays,
            (matchday: FarmWithStakedValue) => (matchday.multiplier ? Number(matchday.multiplier.slice(0, -1)) : 0),
            'desc',
          )
        case 'earning':
          return orderBy(
            matchdays,
            (matchday: FarmWithStakedValue) => (matchday.userData ? Number(matchday.userData.earnings) : 0),
            'desc',
          )
        case 'latest':
          return orderBy(matchdays, (matchday: FarmWithStakedValue) => Number(matchday.liquidity), 'desc')
        default:
          return matchdays
      }
    }

    if (isActive) {
      matchdaysStaked = stakedOnly ? matchdaysList(stakedOnlyMatchdays) : matchdaysList(activeMatchdays)
    }
    if (isInactive) {
      matchdaysStaked = stakedOnly ? matchdaysList(stakedInactiveMatchdays) : matchdaysList(inactiveMatchdays)
    }

    if (platformOption !== 'all') {
      matchdaysStaked = matchdaysStaked.filter((matchday) => matchday.type.toLowerCase() === platformOption)
    }

    return sortMatchdays(matchdaysStaked)
  }, [
    sortOption,
    activeMatchdays,
    matchdaysList,
    inactiveMatchdays,
    isActive,
    isInactive,
    stakedInactiveMatchdays,
    stakedOnly,
    stakedOnlyMatchdays,
    platformOption,
  ])

  const rowData = matchdaysStakedMemoized.map((matchday) => {
    const tokenAddress = matchday.token.address[chainId]
    const quoteTokenAddress = matchday.quoteToken.address[chainId]

    const lpLabel = matchday.lpSymbol && matchday.lpSymbol.split(' ')[0].toUpperCase().replace('PANCAKE', '')

    const row: RowProps = {
      apy: {
        value: matchday.apy,
        multiplier: matchday.multiplier,
        lpLabel,
        tokenAddress: matchday.quoteToken.address,
        quoteTokenAddress: matchday.quoteToken.address,
        quoteTokenSymbol: matchday.quoteToken.symbol,
        cakePrice,
        originalValue: matchday.apy.toNumber(),
      },
      matchday: {
        label: lpLabel,
        id: matchday.id,
        pid: matchday.pid,
        token: matchday.token,
        quoteToken: matchday.quoteToken,
        isTokenOnly: matchday.isTokenOnly,
        type: matchday.type,
      },
      earned: {
        earnings: getBalanceNumber(
          new BigNumber(matchday.userData && matchday.userData.earnings ? matchday.userData.earnings : 0),
        ),
        pid: matchday.pid,
      },
      liquidity: {
        liquidity: matchday.liquidity,
      },
      multiplier: {
        multiplier: matchday.multiplier,
      },
      details: matchday,
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
          case 'matchday':
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
          TeaSwap Matchdays (Auto-Compounder)
        </Heading>
        <Heading scale="lg" color="text">
          Stake tokens for matchday rewards
        </Heading>
        <Heading scale="md" color="text">
          <CardValue value={tvl.toNumber()} prefix="$" decimals={2} fontSize="18px" />
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
                    label: 'Liquidity',
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
                ]}
                onChange={handleSortOptionChange}
              />
            </LabelWrapper>
            <LabelWrapper style={{ marginLeft: 16 }}>
              <Text textTransform="uppercase">Search</Text>
              <SearchInput onChange={handleChangeQuery} placeholder="Search Matchdays" />
            </LabelWrapper>
          </FilterContainer>
        </ControlContainer>
        {renderContent()}
        <div ref={loadMoreRef} />
      </Page>
    </>
  )
}

export default Matchdays
