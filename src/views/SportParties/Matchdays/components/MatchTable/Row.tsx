import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMatchBreakpoints } from '@pancakeswap-libs/uikit'
import useDelayedUnmount from 'hooks/useDelayedUnmount'

import TheDate, { TheDateProps } from './TheDate'
import Match, { MatchProps } from './Match'
import Details from '../Details'
import ActionPanel from './Actions/ActionPanel'
import CellLayout from '../CellLayout'
import { DesktopColumnSchema, MobileColumnSchema } from './types'
import { MatchWithMoreValue } from '../MatchCard/MatchCard'
import { TeamWithMoreValue } from '../TeamCard/TeamCard'
import TheWinnerTeam from './TheWinnerTeam'

export interface RowProps {
  match: MatchProps
  theDate: TheDateProps
  theWinnerTeam: TeamWithMoreValue
  details: MatchWithMoreValue
}

interface RowPropsWithLoading extends RowProps {
  userDataReady: boolean
}

const cells = {
  match: Match,
  theDate: TheDate,
  theWinnerTeam: TheWinnerTeam,
}

const CellInner = styled.div`
  padding: 24px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 8px;

  ${({ theme }) => theme.mediaQueries.xl} {
    padding-right: 32px;
  }
`

const StyledTr = styled.tr`
  cursor: pointer;
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
`

const TheDateMobileCell = styled.td`
  padding-top: 16px;
  padding-bottom: 24px;
`
const TheWinnerTeamMobileCell = styled.td`
  padding-top: 16px;
  padding-bottom: 24px;
`

const FarmMobileCell = styled.td`
  padding-top: 24px;
`

const Row: React.FunctionComponent<RowPropsWithLoading> = (props) => {
  const hasStakedAmount = true
  const [actionPanelExpanded, setActionPanelExpanded] = useState(hasStakedAmount)
  const shouldRenderChild = useDelayedUnmount(actionPanelExpanded, 300)

  const toggleActionPanel = () => {
    setActionPanelExpanded(!actionPanelExpanded)
  }

  useEffect(() => {
    setActionPanelExpanded(hasStakedAmount)
  }, [hasStakedAmount])

  const { isXl, isXs } = useMatchBreakpoints()

  const isMobile = !isXl
  const tableSchema = isMobile ? MobileColumnSchema : DesktopColumnSchema
  const columnNames = tableSchema.map((column) => column.name)

  const handleRenderRow = () => {
    if (!isXs) {
      return (
        <StyledTr onClick={toggleActionPanel}>
          {Object.keys(props).map((key) => {
            const columnIndex = columnNames.indexOf(key)
            if (columnIndex === -1) {
              return null
            }

            switch (key) {
              case 'details':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout>
                        <Details actionPanelToggled={actionPanelExpanded} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              case 'theDate':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout>
                        <TheDate {...props.theDate} />
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
      <StyledTr onClick={toggleActionPanel}>
        <td>
          <tr>
            <FarmMobileCell>
              <CellLayout>
                <Match {...props.match} />
              </CellLayout>
            </FarmMobileCell>
          </tr>
          <tr>
            <TheDateMobileCell>
              <CellLayout>
                <TheDate {...props.theDate} />
              </CellLayout>
            </TheDateMobileCell>
          </tr>
          <tr>
            <TheWinnerTeamMobileCell>
              <CellLayout>
                <TheWinnerTeam {...props.theWinnerTeam} />
              </CellLayout>
            </TheWinnerTeamMobileCell>
          </tr>
        </td>
      </StyledTr>
    )
  }

  return (
    <>
      {handleRenderRow()}
      {shouldRenderChild && (
        <tr>
          <td colSpan={6}>
            <ActionPanel {...props} expanded={actionPanelExpanded} />
          </td>
        </tr>
      )}
    </>
  )
}

export default Row
