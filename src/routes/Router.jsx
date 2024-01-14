import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/home-page/HomePage';
import MainLayout from '../lay-outs/main-layout/MainLayout';
import LogIn from '../pages/login/LogIn';
import Register from '../pages/register/Register';
import BlogPage from '../pages/blog-page/BlogPage';

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
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default Router;
