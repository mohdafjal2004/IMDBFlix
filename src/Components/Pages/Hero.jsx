import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <Link to="/genres">Movies with genres</Link>
      <br />
      <Link to="/popular">Popular on Netflix</Link> <br />
      <Link to="/top-rated">Top-Rated Movies</Link>
      <br />
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
      <Link to="/trending">Trending Movies</Link>
      <br />
      <Link to="/animated">Animated Movies</Link>
      <br />
      <Link to="/drama">Drama Movies</Link>
    </div>
  );
};
export default Hero;
