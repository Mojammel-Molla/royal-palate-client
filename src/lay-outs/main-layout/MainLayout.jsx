import { Outlet } from 'react-router-dom';
import Navbar from '../../pages/home/navbar/Navbar';
import Footer from '../../pages/home/footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
