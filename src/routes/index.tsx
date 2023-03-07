import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { MainLayout } from '@/components/laytouts/MainLayout'
import { detailRoutes } from '@/routes/detail'
import { topRoutes } from './top'

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

const indexRoutes = [
  {
    index: true,
    element: <Navigate to="top" replace />,
  },
]

export const routes = [
  {
    path: '',
    element: <App />,
    children: [...topRoutes, ...detailRoutes, ...indexRoutes],
  },
]

export const AppRoutes = () => {
  const element = useRoutes([...routes])

  return <>{element}</>
}
