import AboutOurFood from '../about-our-food/AboutOurFood';
import Banner from '../banner/Banner';
import TacosBanner from '../tacos-banner/TacosBanner';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <TacosBanner></TacosBanner>
      <AboutOurFood></AboutOurFood>
    </div>
  );
};

export default HomePage;
