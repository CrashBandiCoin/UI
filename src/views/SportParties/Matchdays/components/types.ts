
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
    name: 'matchday',
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
    name: 'details',
    sortable: true,
    label: 'GFHGHGFHFG',
  },
]

export const DesktopColumnSchema: ColumnsDefTypes[] = [
  {
    id: 1,
    name: 'matchday',
    sortable: true,
    label: '',
  },

  {
    id: 2,
    name: 'theDate',
    sortable: true,
    label: '',
  },
  {
    id: 3,
    name: 'details',
    sortable: true,
    label: '',
  },
]

export enum ViewMode {
  'TABLE' = 'TABLE',
  'CARD' = 'CARD',
}
