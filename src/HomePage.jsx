import { Link } from "react-router-dom";
import Hero from "./Components/Pages/Hero";
import HeroImage from "./Components/Pages/HeroImage";
import Navbar from "./Components/Pages/Navbar";

const HomePage = () => {
  return (
    <div className="">
      <Navbar />
      <HeroImage/>
      <Hero />
    </div>
  );
};
export default HomePage;
