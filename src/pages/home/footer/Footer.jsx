import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#f4f1ea] text-base-content">
        <aside>
          <h2 className="text-[#f98104] font-bold text-2xl">
            Royal
            <span className="text-xl text-[#c7372d] font-bold"> Palate</span>
          </h2>
          <p className="text-base font-semibold">
            2972 Westheimer Rd. Santa Ana, <br />
            Illinois 85486
          </p>
          <p className="text-base font-semibold">
            royalpalate@gmail.com <br />
            <span className="font-bold text-[#c7372d]">+(084) 456-0789</span>
          </p>
        </aside>
        <nav>
          <header className="footer-title">Food Items</header>
          <a className="font-bold text-base">Burgers</a>
          <a className="font-bold text-base">Pizzas</a>
          <a className="font-bold text-base">Fries</a>
          <a className="font-bold text-base">Drinks</a>
        </nav>
        <nav>
          <header className="footer-title"></header>
          <a className="font-bold text-base">Dessert</a>
          <a className="font-bold text-base">Beverages</a>
          <a className="font-bold text-base">Sauces</a>
          <a className="font-bold text-base">Combos</a>
        </nav>
        <nav>
          <header className="footer-title">OPENING HOURS</header>
          <a className="font-bold text-base">
            Monday - Friday : <span className="text-[#c7372d]">8am - 4pm</span>
          </a>
          <a className="font-semibold text-base">
            Saturday : <span className="text-[#c7372d]">8am - 12 pm</span>
          </a>
          <div className="flex gap-3 text-2xl mt-2">
            <a href="https://www.facebook.com">
              <FaFacebook className=" hover:text-[#c7372d]" />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagram className=" hover:text-[#c7372d]" />
            </a>
            <a href="https://twitter.com">
              <FaTwitter className=" hover:text-[#c7372d]" />
            </a>
            <a href="https://www.pinterest.com">
              <FaPinterest className=" hover:text-[#c7372d]" />
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 border-t-2 bg-[#f4f1ea] text-base-content">
        <aside>
          <p className="font-bold text-base">
            Copyright © 2024 - All right reserved by Royal Palate
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
