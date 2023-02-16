import { CorporateDetail } from '@/pages/detail/corporate'
import { EmployeeList } from '@/pages/detail/employeeList'

/** 詳細画面のルーティング */
export const detailRoutes = [
  {
    path: 'corporate',
    element: <CorporateDetail />,
  },
  {
    path: 'employee',
    element: <EmployeeList />,
  },
]
