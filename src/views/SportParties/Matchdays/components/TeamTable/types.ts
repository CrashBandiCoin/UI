
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
    label: 'DGDFGDSFDFDFGDF',
  },

  {
    id: 2,
    name: 'score',
    sortable: true,
    label: 'FSDFSDSF',
  },
]

export const DesktopColumnSchema: ColumnsDefTypes[] = [
  {
    id: 1,
    name: 'team',
    sortable: true,
    label: 'DGDFGDSFDFDFGDF',
  },

  {
    id: 2,
    name: 'score',
    sortable: true,
    label: 'FSDFSDSF',
  },
]
