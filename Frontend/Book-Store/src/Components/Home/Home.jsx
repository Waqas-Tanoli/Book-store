import Banners from "../Banners/Banners";
import BestSellerBooks from "../BestSellerBooks/BestSellerBooks";
import FavBooks from "../FavBooks/FavBooks";
import OtherBooks from "../OtherBooks/OtherBooks";
import PromoBanner from "../PromoBanner/PromoBanner";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Banners />
      <BestSellerBooks />
      <FavBooks />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </div>
  );
};
export default Home;
