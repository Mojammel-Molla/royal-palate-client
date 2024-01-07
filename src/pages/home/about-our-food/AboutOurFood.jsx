import AboutBanner from '../../../assets/about-our-food_img.png';
import { FaBurger } from 'react-icons/fa6';
import { GiFoodTruck } from 'react-icons/gi';
import { GiOpenedFoodCan } from 'react-icons/gi';
const AboutOurFood = () => {
  return (
    <div className="hero min-h-screen bg-[#f4f1ea]">
      <div className="hero-content flex-col lg:flex-row">
        <img src={AboutBanner} className=" rounded-lg " />
        <div>
          <p className="uppercase text-[#c33130] font-bold">About Our Food</p>
          <h1 className="text-5xl font-bold">
            WE MAKE THE BEST BURGER IN YOUR TOWN!
          </h1>
          <p className="py-6">
            The mouth-watering aroma of sizzling burgers now fills the streets
            of Birmingham thanks to the passionate pursuit of three brothers,
            the British founders of Fazfood. After over 50 years of experience
            in the culinary industry between them, they set out on a journey to
            discover the ultimate burger.
          </p>
          <div className="md:flex justify-around">
            <div>
              <FaBurger className="text-5xl text-[#c33130] mx-auto " />
              <p className="text-base font-bold text-center">
                A NEW LOOK ON <br /> THE RIGHT FOOD
              </p>
            </div>
            <div>
              <GiOpenedFoodCan className="text-5xl text-[#c33130] mx-auto  " />
              <p className="text-base text-center font-bold">
                THE USE OF NATURAL <br /> BEST QUALITY PRODUCTS
              </p>
            </div>
            <div>
              <GiFoodTruck className="text-5xl text-[#c33130] mx-auto" />
              <p className="text-base text-center font-bold">
                FASTEST ON YOUR <br /> DOOR STEP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurFood;
