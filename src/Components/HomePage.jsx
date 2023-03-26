import { Link } from "react-router-dom";
import Categories from "./Categories";

const HomePage = () => {
  return (
    <div>
      <Link to="/category">Go to Categories</Link>
    </div>
  );
};
export default HomePage;
