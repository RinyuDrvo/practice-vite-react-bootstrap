import { useRoutes } from 'react-router-dom';

import { Top } from '@/pages/Top'
import { Detail } from '@/pages/Detail'

export const AppRoutes = () => {

  const commonRoutes = [
    { path: '/', element: <Top /> },
    { path: '/detail', element: <Detail /> }
  ];

  const element = useRoutes([...commonRoutes]);

  return <>{element}</>;
};
