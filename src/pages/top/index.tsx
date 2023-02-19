import { Table } from '@/feature/top/components/Table'
import { Company } from '@/models/Company'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { getCompanyList } from '@/feature/top/api/getCompanyList'

/** トップページ */
export const Top = () => {
  const [companyList, setCompanyList] = useState<Company[]>([])
  const onClickLoad = async () => {
    const res = await getCompanyList()
    setCompanyList(res.data.companyList)
  }
  return (
    <>
      <h1>top page</h1>
      <Button variant="primary" onClick={onClickLoad}>
        Load Company List
      </Button>
      <Table data={companyList} />
    </>
  )
}
