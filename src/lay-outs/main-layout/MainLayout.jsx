import { Outlet } from 'react-router-dom';
import Navbar from '../../pages/home/navbar/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
