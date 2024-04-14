import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../Utils/API";
import playIcon from "../Assets/black_play.png";
import infoIcon from "../Assets/info.png";
const key = process.env.REACT_APP_API_KEY;

const HeroImage = () => {
  const image_Base_Url = "https://image.tmdb.org/t/p/original";
  const [popular, setPopular] = useState({});

  const fetch = async () => {
    const response = await axios.get(`/movie/popular?api_key=${key}`);
    setPopular(
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ]
    );
  };

  useEffect(() => {
    fetch();
  }, []);

  const bgImage = `${image_Base_Url}${popular.backdrop_path}`;

  return (
    <div
      className="  relative   pt-72 md:pt-[200px] md:pb-[96px] bg-no-repeat lg:pt-[200px] xl:pt-[250px] xl:pb-32 md:px-6    lg:pb-[60px]    
        text-white    2xl:min-h-[75vh]   2xl:px-24   
         before:absolute before:-inset-1 before:bg-gradient-to-t before:from-black  
            md:bg-fill bg-center bg-cover  md:bg-cover md:object-contain shadow-inner shad
          md:bg-right-top "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="md:text-start    space-y-4 md:w-2/3  text-center flex flex-col px-4 lg:w-[50%] relative">
        <h1 className="2xl:text-5xl text-4xl font-roboto font-extrabold ">
          {popular.original_title}
        </h1>

        <div className=" text-base md:text- xl:text-xl  ">
          <p className="line-clamp-3 md:line-clamp-4 2xl:font-semibold font-apple leading-5 lg:leading-7">
            {popular.overview}
          </p>
        </div>
        <div className="flex flex-row space-x-4 md:space-y-4   text-lg font-semibold   justify-center md:justify-start md:items-baseline">
          <button className="flex  justify-center items-center bg-white text-black  rounded py-2 w-32 h-11 gap-2">
            <img src={playIcon} alt="play_icon" className="w-3 h-3" />
            <span>Play</span>
          </button>
          <Link
            to={`/category/${popular.id}`}
            state={{ menuType: "movie" }}
            className=" flex  justify-center items-center text-white bg-gray-700  rounded py-2 w-32 h-11 gap-2 "
          >
            <img src={infoIcon} alt="more_info_icon" className="w-3 h-3" />
            <span> More Info</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
