import BurgerImage from '../../../assets/burger-photo.png';
import BannerPhoto from '../../../assets/banner-photo.jpg';
import { FaArrowRight } from 'react-icons/fa';
const Banner = () => {
  return (
    <div
      className="hero min-h-[90vh] "
      style={{
        backgroundImage: `url(${BannerPhoto})`,
      }}
    >
      <div className="hero-overlay bg-blend-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={BurgerImage}
          className=" lg:w-[700px] lg:h-[700px] rounded-lg "
        />
        <div className="text-white">
          <h1 className="md:text-7xl uppercase font-bold">
            Grilled <br /> beef burger
          </h1>
          <p className="py-6">
            The stack burger blend, a closely guarded family secret, transcends
            mere recipes. It is a legendary culinary legacy, a testament to our
            family's passion for crafting the perfect burger, steeped in
            tradition and flavor.
          </p>
          <button className="px-8 py-4 flex justify-center rounded-lg font-bold bg-green-600 hover:bg-[#fbad39]">
            Order Now
            <span className="m-1 pl-2">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
