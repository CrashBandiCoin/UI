import React from 'react'
import { RowType } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import { Team } from 'state/types'
import { RowProps } from './components/TeamTable/Row'
import Table from './components/TeamTable/TeamTable'
import { DesktopColumnSchema } from './components/TeamTable/types'

export interface TeamsProps {
  teams: Team[]
}

const StyledPage = styled(Page)`
  min-height: 0px;
  padding-top: 0px;
  align-items: left;
  padding-bottom: 0px;
  width: 90%;
`

const Teams: React.FC<TeamsProps> = ({ teams }) => {
  const userDataReady = true

  const rowData = teams.map((team) => {
    const row: RowProps = {
      team: {
        id: team.id,
        label: team.label,
        icon: team.icon,
      },
      votedToken: {
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

  return <StyledPage>{renderContent()}</StyledPage>
}

export default Teams
