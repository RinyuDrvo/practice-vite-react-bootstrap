import { Outlet, useRoutes } from 'react-router-dom'
import React from 'react'
import { Top } from '@/pages/Top'
import { Detail } from '@/pages/Detail'
import { MainLayout } from '@/components/laytouts/MainLayout'

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Top /> },
      { path: '/detail', element: <Detail /> },
    ],
  },
]

export const AppRoutes = () => {
  const element = useRoutes([...routes])

  return <>{element}</>
}
