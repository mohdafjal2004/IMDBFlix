import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/popular">Popular Movies</Link> <br />
      <Link to="/top-rated">Top-Rated Movies</Link>
      <br />
      <Link to="/up-coming">Upcoming Movies</Link> <br />
      <Link to="/genres">Movies with genres</Link>
    </div>
  );
};
export default HomePage;
