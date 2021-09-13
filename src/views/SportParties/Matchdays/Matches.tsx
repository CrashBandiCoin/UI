import React from 'react'
import { RowType } from '@pancakeswap-libs/uikit'

import Page from 'components/layout/Page'
import { Match } from 'state/types'
import { RowProps } from './components/MatchTable/Row'
import Table from './components/MatchTable/MatchTable'

import { DesktopColumnSchema } from './components/MatchTable/types'

export interface MatchesProps {
  matches: Match[]
}

const Matches: React.FC<MatchesProps> = ({ matches }) => {
  const userDataReady = true

  const rowData = matches.map((match) => {
    const row: RowProps = {
      match: {
        id: match.id,
        winnerToken: match.winnerToken,
      },
      theDate: {
        theDate: match.theDate,
      },
      theWinnerTeam: match.theWinnerTeam,
      details: match,
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
          case 'match':
            return b.id - a.id
          default:
            return 1
        }
      },
      sortable: column.sortable,
    }))

    return <Table data={rowData} columns={columns} userDataReady={userDataReady} />
  }

  return <Page>{renderContent()}</Page>
}

export default Matches
