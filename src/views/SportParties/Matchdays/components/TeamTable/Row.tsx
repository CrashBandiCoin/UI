import React from 'react'
import styled from 'styled-components'
import { useMatchBreakpoints } from '@pancakeswap-libs/uikit'

import Team, { TeamProps } from './Team'
import VotedToken, { VotedTokenProps } from './VotedToken'
import Score, { ScoreProps } from './Score'
import CellLayout from '../CellLayout'
import { DesktopColumnSchema, MobileColumnSchema } from './types'

export interface RowProps {
  team: TeamProps
  score?: ScoreProps
  votedToken?: VotedTokenProps
}

interface RowPropsWithLoading extends RowProps {
  userDataReady: boolean
}

const cells = {
  team: Team,
  score: Score,
  votedToken: VotedToken,
}

const CellInner = styled.div`
  padding: 12px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 8px;

  ${({ theme }) => theme.mediaQueries.xl} {
    padding-right: 4px;
  }
`

const StyledTr = styled.tr`
  cursor: pointer;
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
`

const ScoreMobileCell = styled.td`
  padding-top: 8px;
  padding-bottom: 12px;
`

const TeamMobileCell = styled.td`
  padding-top: 12px;
`

const Row: React.FunctionComponent<RowPropsWithLoading> = (props) => {
  const { isXl, isXs } = useMatchBreakpoints()

  const isMobile = !isXl
  const tableSchema = isMobile ? MobileColumnSchema : DesktopColumnSchema
  const columnNames = tableSchema.map((column) => column.name)

  const handleRenderRow = () => {
    if (!isXs) {
      return (
        <StyledTr>
          {Object.keys(props).map((key) => {
            const columnIndex = columnNames.indexOf(key)
            if (columnIndex === -1) {
              return null
            }

            switch (key) {
              case 'score':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout>
                        <Score {...props.score} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              default:
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout label={tableSchema[columnIndex].label}>
                        {React.createElement(cells[key], { ...props[key] })}
                      </CellLayout>
                    </CellInner>
                  </td>
                )
            }
          })}
        </StyledTr>
      )
    }

    return (
      <StyledTr>
        <td>
          <tr>
            <TeamMobileCell>
              <CellLayout>
                <Team {...props.team} />
              </CellLayout>
            </TeamMobileCell>
          </tr>
          <tr>
            <TeamMobileCell>
              <CellLayout>
                <VotedToken {...props.votedToken} />
              </CellLayout>
            </TeamMobileCell>
          </tr>
          <tr>
            <ScoreMobileCell>
              <CellLayout>
                <Score {...props.score} />
              </CellLayout>
            </ScoreMobileCell>
          </tr>
        </td>
      </StyledTr>
    )
  }

  return <>{handleRenderRow()}</>
}

export default Row
