import { Table } from "@/feature/top/Table"
import { makeData } from "@/lib/utils/makeData"
import { Company } from "@/models/Company"
import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import React from "react"

/** トップページ */
export const Top = () => {
  const columnHelper = createColumnHelper<Company>()
  /** カラム設定 */
  const columns: ColumnDef<Company, any>[] = [
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

  const [data] = React.useState(() => makeData(100))
  return (
    <>
      <h1>top page</h1>
      <Table
        {...{
          data,
          columns
        }}
      />
    </>
  )
}
