import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { Top } from '@/pages/top'
import { Detail } from '@/pages/detail'
import { MainLayout } from '@/components/laytouts/MainLayout'
import { detailRoutes } from '@/routes/detail'

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

export const routes = [
  {
    path: '',
    element: <App />,
    children: [
      {
        path: 'top',
        element: <Top />,
        default: true,
      },
      {
        path: 'detail',
        element: <Detail />,
        children: detailRoutes,
      },
      {
        index: true,
        element: <Navigate to="top" replace />,
      },
    ],
  },
]

export const AppRoutes = () => {
  const element = useRoutes([...routes])

  return <>{element}</>
}
