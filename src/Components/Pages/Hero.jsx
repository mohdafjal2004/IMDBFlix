import { Link } from "react-router-dom";
import Categories from "../Genres/Popular";
import Trending from "../Genres/Trending";
import TopRated from "../Genres/TopRated";
import Upcoming from "../Genres/Upcoming";

const Hero = () => {
  return (
    <div>
      {/* <Link to="/genres">Movies with genres</Link> */}
      {/* <br /> */}
      <Categories />
      <Trending />
      <TopRated/>
      <Upcoming/>
      <Link to="/up-coming">Upcoming Movies</Link> <br />
      <Link to="/romance">Romance</Link>
      <br />
      <Link to="/horror">Horror</Link>
      <br />
      <Link to="/comedy">Comedy</Link>
      <br />
      <Link to="/tv">Tv Movies</Link>
      <br />
      <Link to="/action">Action Movies</Link>
      <br />
      <br />
      <Link to="/animated">Animated Movies</Link>
      <br />
      <Link to="/drama">Drama Movies</Link>
    </div>
  );
};
export default Hero;
