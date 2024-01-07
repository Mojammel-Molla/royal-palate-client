import BurgerImage from '../../../assets/burger-photo.png';
import BannerPhoto from '../../../assets/banner-photo.jpg';

const Banner = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: `url(${BannerPhoto})`,
      }}
    >
      <div className="hero-overlay bg-blend-overlay bg-opacity-20"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={BurgerImage} className=" rounded-lg shadow-2xl" />
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
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
