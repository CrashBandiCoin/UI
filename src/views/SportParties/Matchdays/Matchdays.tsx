import React, { useCallback, useState, useMemo, useRef } from 'react'
import { Heading, RowType, Toggle, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { orderBy } from 'lodash'
import { useMatchdays } from 'state/hooks'

import Page from 'components/layout/Page'
import PageHeader from 'components/PageHeader'
import SearchInput from 'components/SearchInput'
import Select, { OptionProps } from 'components/Select/Select'
import { Matchday } from 'state/types'
import { RowProps } from './components/MatchdayTable/Row'
import Table from './components/MatchdayTable/MatchdayTable'
import { DesktopColumnSchema } from './components/MatchdayTable/types'

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

const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
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

const Matchdays: React.FC = () => {
  const matchdaysFromState = useMatchdays()

  const [query, setQuery] = useState('')
  const [sortOption, setSortOption] = useState('label')

  const userDataReady = true

  const [activeOnly, setActiveOnly] = useState(true)

  const activeMatchdays = matchdaysFromState.filter((matchday) => matchday.isActive)
  const inactiveMatchdays = matchdaysFromState.filter((matchday) => !matchday.isActive)

  const matchdaysList = useCallback(
    (matchdaysToDisplay: Matchday[]): Matchday[] => {
      if (query) {
        return matchdaysToDisplay.filter((matchday: Matchday) => {
          return matchday.label.toLowerCase().includes(query.toLowerCase())
        })
      }

      return matchdaysToDisplay
    },
    [query],
  )

  const loadMoreRef = useRef<HTMLDivElement>(null)

  const matchdaysMemoized = useMemo(() => {
    const sortMatchdays = (matchdays: Matchday[]): Matchday[] => {
      switch (sortOption) {
        case 'label':
          return orderBy(matchdays, (matchday: Matchday) => matchday.label, 'asc')
        case 'theDate':
          return orderBy(matchdays, (matchday: Matchday) => matchday.id, 'asc')
        default:
          return matchdays
      }
    }

    if (activeOnly) return sortMatchdays(matchdaysList(activeMatchdays))

    return sortMatchdays(matchdaysList(inactiveMatchdays))
  }, [activeMatchdays, activeOnly, inactiveMatchdays, matchdaysList, sortOption])

  const rowData = matchdaysMemoized.map((matchday) => {
    const row: RowProps = {
      theDate: {
        theDate: matchday.theDate.toUpperCase(),
      },
      matchday: {
        label: matchday.label,
        id: matchday.id,
        winnerToken: matchday.winnerToken,
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

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <>
      <PageHeader>
        <Heading as="h1" scale="xl" color="secondary" mb="24px">
          Sport Parties
        </Heading>
        <Heading scale="lg" color="text">
          Championsleague
        </Heading>
      </PageHeader>
      <Page>
        <ControlContainer>
          <FilterContainer>
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
                    label: 'Label',
                    value: 'label',
                  },
                  {
                    label: 'Day',
                    value: 'theDate',
                  },
                ]}
                onChange={handleSortOptionChange}
              />
            </LabelWrapper>
            <LabelWrapper style={{ marginLeft: 16 }}>
              <Text textTransform="uppercase">Search</Text>
              <SearchInput onChange={handleChangeQuery} placeholder="Search days" />
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
