import Upcoming from "../Genres/Upcoming";
import Action from "../Genres/Actions";
import Animated from "../Genres/Animated";
import Romance from "../Genres/Romance";
import Horror from "../Genres/Horror";
import Comedy from "../Genres/Comedy";
import Drama from "../Genres/Drama";
import Popular from "../Genres/Popular";

const Hero = () => {
  return (
    <div className="flex flex-col gap-0 overflow-hidden md:-mt-28 lg:-mt-6 xl:-mt-36 z-40 md:px-4  2xl:px-20 ">
      <Popular apiPoint="/movie/popular" heading="Popular Movies" />
      <Popular apiPoint="/trending/movie/week" heading="Trending Movies" />
      <Popular apiPoint="/movie/top_rated" heading="Top Rated Movies" />
      <Popular apiPoint="/movie/upcoming" heading="Upcoming Movies" />
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
