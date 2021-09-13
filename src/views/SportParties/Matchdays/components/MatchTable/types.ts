
export type ColumnsDefTypes = {
  id: number
  label: string
  name: string
  sortable: boolean
}

export type ScrollBarProps = {
  ref: string
  width: number
}


export const MobileColumnSchema: ColumnsDefTypes[] = [
  {
    id: 1,
    name: 'match',
    sortable: true,
    label: 'DGDFGDSFDFDFGDF',
  },

  {
    id: 2,
    name: 'theDate',
    sortable: true,
    label: 'FSDFSDSF',
  },
  {
    id: 3,
    name: 'theWinnerTeam',
    sortable: true,
    label: 'GFHGHGFHFG',
  },
  {
    id: 4,
    name: 'details',
    sortable: true,
    label: 'GFHGHGFHFG',
  },
]

export const DesktopColumnSchema: ColumnsDefTypes[] = [
  {
    id: 1,
    name: 'match',
    sortable: true,
    label: 'DGDFGDSFDFDFGDF',
  },

  {
    id: 2,
    name: 'theDate',
    sortable: true,
    label: 'FSDFSDSF',
  },
  {
    id: 3,
    name: 'theWinnerTeam',
    sortable: true,
    label: 'GFHGHGFHFG',
  },
  {
    id: 4,
    name: 'details',
    sortable: true,
    label: 'GFHGHGFHFG',
  },
]
