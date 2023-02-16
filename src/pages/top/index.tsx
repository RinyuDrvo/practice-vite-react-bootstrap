import { Table } from '@/feature/top/components/Table'
import { makeData } from '@/lib/utils/makeData'
import { useState } from 'react'

/** トップページ */
export const Top = () => {
  const [data] = useState(() => makeData(100))
  return (
    <>
      <h1>top page</h1>
      <Table {...{ data }} />
    </>
  )
}
