import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/home-page/HomePage';
import MainLayout from '../lay-outs/main-layout/MainLayout';

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
]);

export default Router;
