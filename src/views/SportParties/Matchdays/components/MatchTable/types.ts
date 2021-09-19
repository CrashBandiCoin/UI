
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

export const DesktopColumnSchema: ColumnsDefTypes[] = [
  {
    id: 1,
    name: 'match',
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
