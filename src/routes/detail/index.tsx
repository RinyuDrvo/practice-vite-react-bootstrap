import { Detail } from '@/pages/detail'
import { CorporateDetail } from '@/pages/detail/corporate'
import { EmployeeList } from '@/pages/detail/employeeList'
import { Navigate } from 'react-router-dom'

/** 詳細画面のルーティング */
export const detailRoutes = [
  {
    path: 'detail',
    element: <Detail />,
    children: [
      {
        path: 'corporate',
        element: <CorporateDetail />,
      },
      {
        path: 'employee',
        element: <EmployeeList />,
      },
      {
        index: true,
        element: <Navigate to="corporate" replace />,
      },
    ],
  },
]
