import React from 'react'
import { RowType } from '@pancakeswap-libs/uikit'

import Page from 'components/layout/Page'
import { Team } from 'state/types'
import { RowProps } from './components/TeamTable/Row'
import Table from './components/TeamTable/TeamTable'

import { DesktopColumnSchema } from './components/types'

export interface TeamsProps {
  teams: Team[]
}

const Teams: React.FC<TeamsProps> = ({ teams }) => {
  const userDataReady = true

  const rowData = teams.map((team) => {
    const row: RowProps = {
      team: {
        id: team.id,
        label: team.label,
        votedToken: team.votedToken,
      },
      score: {
        score: team.score,
      },
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
          case 'team':
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

export default Teams
