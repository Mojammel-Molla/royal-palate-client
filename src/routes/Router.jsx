import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/home-page/HomePage';
import MainLayout from '../lay-outs/main-layout/MainLayout';
import LogIn from '../pages/login/LogIn';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LogIn />,
  },
]);

export default Router;
