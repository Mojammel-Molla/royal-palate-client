import AboutOurFood from '../about-our-food/AboutOurFood';
import Banner from '../banner/Banner';
import CustomerReviews from '../customer-reviews/CustomerReviews';
import TacosBanner from '../tacos-banner/TacosBanner';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <TacosBanner></TacosBanner>
      <AboutOurFood></AboutOurFood>
      <CustomerReviews></CustomerReviews>
    </div>
  );
};

export default HomePage;
