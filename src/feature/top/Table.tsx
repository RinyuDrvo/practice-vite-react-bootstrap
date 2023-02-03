import { Table as BTable } from 'react-bootstrap'
import React from 'react'
import { Company } from '@/models/Company'
import { createColumnHelper, flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table'

/** テーブル */
export const Table = ({ data }: { data: Company[] }) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const columnHelper = createColumnHelper<Company>()
  /** カラム設定 */
  const columns = [
    columnHelper.accessor('corporateNumber', {
      cell: info => info.getValue()
    }),
    columnHelper.accessor('name', {
      cell: info => info.getValue()
    }),
    columnHelper.accessor('initialCapital', {
      cell: info => info.getValue()
    }),
    columnHelper.accessor('foundedIn', {
      cell: info => info.getValue()
    })
  ]

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return (
    <BTable>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                {flexRender(header.column.columnDef.header, header.getContext())}
                {{ asc: '↑', desc: '↓' }[header.column.getIsSorted() as string] ?? null}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </BTable>
  )
}
