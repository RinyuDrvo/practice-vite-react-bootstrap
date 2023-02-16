import { Outlet, useRoutes } from 'react-router-dom'
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
        path: '/',
        element: <Top />,
        default: true,
      },
      {
        path: 'detail',
        element: <Detail />,
        children: detailRoutes,
      },
    ],
  },
]

export const AppRoutes = () => {
  const element = useRoutes([...routes])

  return <>{element}</>
}
