import TacoBanner from '../../../assets/tacos-banner.jpg';
import TacoImage1 from '../../../assets/taco-image-1.png';
import TacoImage2 from '../../../assets/taco-image-2.png';
import { FaArrowRight } from 'react-icons/fa6';

const TacosBanner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${TacoBanner})`,
      }}
    >
      <div className="grid lg:grid-cols-3 lg:gap-5">
        <div className="">
          <img className=" lg:h-[750px]" src={TacoImage1} alt="" />
        </div>

        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 sm:text-3xl lg:text-7xl font-bold text-[#ffcc19]">
              Quesadila with <span className="text-white">Tomatoes</span>
            </h1>
            <p className="mb-5 font-semibold">
              Wheat tortilla with spicy chicken bites ,cheese, sauce, tomatoes
              and vegetables.
            </p>
            <button className="px-8 py-4 flex mx-auto rounded-lg font-bold bg-green-600 hover:bg-[#fbad39]">
              Order Now
              <span className="m-1 pl-2">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="">
          <img className=" lg:h-[600px]" src={TacoImage2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TacosBanner;
