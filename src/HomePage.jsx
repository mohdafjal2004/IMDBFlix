import { Link } from "react-router-dom";
import Hero from "./Components/Pages/Hero";
import Navbar from "./Components/Pages/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};
export default HomePage;
