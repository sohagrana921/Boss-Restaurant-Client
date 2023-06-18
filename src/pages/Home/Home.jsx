import Banner from "./Banner";
import Categoris from "./Categoris";
import FeaturedMenu from "./FeaturedMenu";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <Categoris></Categoris>
      <PopularMenu></PopularMenu>
      <FeaturedMenu></FeaturedMenu>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
