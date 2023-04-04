import { Link } from "react-router-dom";
import Categories from "../Genres/Popular";
import Trending from "../Genres/Trending";
import TopRated from "../Genres/TopRated";
import Upcoming from "../Genres/Upcoming";
import Action from "../Genres/Actions";
import Animated from "../Genres/Animated";
import Romance from "../Genres/Romance";
import Horror from "../Genres/Horror";
import Comedy from "../Genres/Comedy";
import Drama from "../Genres/Drama";

const Hero = () => {
  return (
    <div>
      <Categories />
      <Trending />
      <TopRated />
      <Upcoming />
      <Action />
      <Animated />
      <Romance />
      <Horror />
      <Comedy />
      <Drama />
    </div>
  );
};
export default Hero;
