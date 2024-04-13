import Hero from "./Components/Pages/Hero";
import HeroImage from "./Components/Pages/HeroImage";

const HomePage = () => {
  return (
    <div className="flex flex-col  gap-6  md:px-1 scrollbar-hide">
      <HeroImage />
      <Hero />
    </div>
  );
};
export default HomePage;
