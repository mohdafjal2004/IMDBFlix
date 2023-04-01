import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../Utils/API";
const key = process.env.REACT_APP_API_KEY;

const HeroImage = () => {
  const image_Base_Url = "https://image.tmdb.org/t/p/original";
  const [popular, setPopular] = useState({});
  console.log(popular);

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
  console.log(bgImage);

  return (
    <div
      className=" relative bg-no-repeat  h-auto md:h-[500px] bg-cover md:bg-cover pt-20 sm:pb-44 pb-20 text-white bg-center  shadow-2xl shadow-zinc-900 "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="text-start  ml-3 md:ml-6 space-y-4 sm:w-1/2 md:w-[600px]   ">
        <h1 className="md:text-5xl text-4xl font-roboto2 font-bold">
          {popular.original_title}
        </h1>

        <div className="flex flex-row space-x-4 items-start text-lg font-semibold font-roboto2">
          <button className="flex  justify-center items-center bg-white text-black  rounded py-2 w-32 h-11">
            Play
          </button>
          <Link
            to={`/category/${popular.id}`}
            className=" flex  justify-center items-center text-white bg-gray-700  rounded py-2 w-32 h-11"
          >
            More Info
          </Link>
        </div>

        <p className="font-roboto2 text-base md:text-xl  drop-shadow-2xl">
          {popular.overview}
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
