
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
    name: 'team',
    sortable: true,
    label: '',
  },

  {
    id: 2,
    name: 'votedToken',
    sortable: true,
    label: '',
  },
  {
    id: 3,
    name: 'score',
    sortable: true,
    label: '',
  },
]

export const DesktopColumnSchema: ColumnsDefTypes[] = [
  {
    id: 1,
    name: 'team',
    sortable: true,
    label: '',
  },

  {
    id: 2,
    name: 'votedToken',
    sortable: true,
    label: '',
  },
  {
    id: 3,
    name: 'score',
    sortable: true,
    label: '',
  },
]
