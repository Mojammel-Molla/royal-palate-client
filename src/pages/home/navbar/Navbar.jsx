import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinks = (
    <>
      <li className="font-bold text-lg mr-3">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-[#c7372d] underline' : ''
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink>Menu</NavLink>
      </li>
      <li>
        <NavLink>Orders</NavLink>
      </li>
      <li>
        <NavLink>Blogs</NavLink>
      </li>
      <li>
        <NavLink>Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-black opacity-70 border-b-4 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <h2 className="text-[#f98104] font-bold text-2xl">
          Royal
          <span className="text-xl text-[#c7372d] font-bold"> Palate</span>
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Reservation</a>
        <a className="btn">Cart</a>
      </div>
    </div>
  );
};

export default Navbar;
