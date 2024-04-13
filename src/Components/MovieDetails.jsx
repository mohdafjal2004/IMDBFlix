import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../Utils/API";
import man from "./Assets/man.png";
import poster from "./Assets/else.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowIcon from "./Assets/arrow.png";
const key = process.env.REACT_APP_API_KEY;

const MovieDetails = () => {
  const Banner_Base_Url = "https://image.tmdb.org/t/p/w500";
  const image_Base_Url = "https://image.tmdb.org/t/p/original";

  const { id } = useParams();
  const [Api, setApi] = useState("");
  const castItemRef = useRef(null);
  const [cast, setCast] = useState([]);
  const [same, setSame] = useState([]);

  const fetchDetails = () => {
    axios
      .get(`/movie/${id}?api_key=${key}&language=en-US`)
      .then((response) => setApi(response.data));
  };

  const fetchCast = () => {
    axios
      .get(`/movie/${id}/credits?api_key=${key}&language=en-US`)
      .then((response) => setCast(response.data));
  };

  const similar = () => {
    axios
      .get(`/movie/${id}/similar?api_key=${key}&language=en-US`)
      .then((response) => setSame(response.data));
  };

  useEffect(() => {
    fetchDetails();
    fetchCast();
    similar();
  }, [id]);

  const rating = Math.round(Api.vote_average);
  const bgImage = `${image_Base_Url}${Api.backdrop_path}`;

  const handleLeftScroll = () => {
    castItemRef.current.scrollTo({
      left: castItemRef.current.scrollLeft - castItemRef.current.clientWidth,
      behavior: "smooth",
    });
  };
  const handleRightScroll = () => {
    castItemRef.current.scrollTo({
      left: castItemRef.current.scrollLeft + castItemRef.current.clientWidth,
      behavior: "smooth",
    });
  };
  return (
    <div className="parent ">
      <div className="movie_detail_outside  h-auto  overflow-hidden ">
        {/* Movie Details Section */}
        <div
          className="movie_detail_inside sm:flex sm:flex-row flex flex-col  sm:h-[500px] h-auto pt-16 md:pt-24 lg:pt-28 
          w-screen md:p-10 md:pl-32  items-center py-8 px-2 sm:p-7 relative  bg-center md:bg-top bg-cover before:absolute before:-inset-1 before:bg-gradient-to-t before:from-black"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="relative">
            <img
              src={`${Banner_Base_Url}/${Api.poster_path}`}
              alt=""
              className="rounded-lg  w-72 "
            />
          </div>
          <div className="text-white ml-3 sm:ml-7 xl:pb-[150px] 2xl:pb-[170px]  sm:text-left sm:w-1/2 pt-8 space-y-2 h-auto relative ">
            {Api.tagline ? (
              <p className="text-xs font-roboto mb-3">{Api && Api.tagline}</p>
            ) : (
              ""
            )}

            <h1 className="md:text-5xl text-4xl font-roboto font-extrabold ">
              {Api && Api.original_title}
            </h1>
            <div className="flex space-x-2 text-sm text-gray-300 justify-center sm:justify-start">
              {Api &&
                Api.genres?.map((genre) => {
                  return (
                    <p key={genre.id} className="font-xs  font-roboto">
                      {genre.name}
                    </p>
                  );
                })}
            </div>
            <h1>Release Date : {Api && Api.release_date}</h1>
            <div className="flex justify-center sm:justify-start">
              <p
                className={`${
                  rating >= 6
                    ? "text-green-600 border-green-600"
                    : "text-red-600 border-red-600"
                } border-2 w-max px-3 py-1 rounded-md  `}
              >
                &#x2B50; {rating}/10
              </p>
            </div>
            <p className="text-sm lg:text-base font-semibold font-roboto">
              {Api && Api.overview}
            </p>

            <h1>Run time : {Api && Api.runtime} min 🕑</h1>
          </div>
        </div>
      </div>

      {/* All Casts */}
      <div className=" relative  my-10  md:w-[99vw]   text-center  w-screen  md:px-4  2xl:px-28  md:overflow-hidden">
        <h1 className="text-white font-roboto text-2xl mb-4 md:text-left md:text-3xl md:px-7 lg:px-11  xl:px-9 2xl:px-2  font-extrabold">
          Cast
        </h1>
        <div
          className=" flex overflow-auto scrollbar-hide overflow-y-hidden "
          ref={castItemRef}
        >
          {cast &&
            cast.cast?.map((data) => {
              return (
                <div
                  key={data.id}
                  className="md:flex w-screen md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6  relative  border-fuchsia-600"
                >
                  <Link
                    to={`/castDetails/${data.id}`}
                    className="   border-green-400  w-screen  px-9 flex justify-center "
                  >
                    {/* Image */}
                    {data.profile_path === null ? (
                      <img
                        src={man}
                        alt={data.profile_path}
                        className="  h-[300px]  w-[80vw]   rounded-lg hover:scale-95     opacity-75 "
                      />
                    ) : (
                      <img
                        src={`${Banner_Base_Url}/${data.profile_path}`}
                        alt="Cast profile not available"
                        className="  h-[300px]  w-[80vw]   rounded-lg hover:scale-95      opacity-75"
                      />
                    )}
                    {/*div for text on image */}
                    <div className="text-white flex flex-col absolute top-10 px-20 pt-52  ">
                      <p className=" font-roboto font-semibold">
                        {data.original_name}
                      </p>
                      <p className=" font-roboto ">{data.character}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          <button
            className="absolute top-[50%] left-0"
            onClick={handleLeftScroll}
          >
            <img
              src={arrowIcon}
              alt="left_arrow_icon"
              className="rotate-90 h-6 w-6 border-2 rounded-full p-1 box-content"
            />
          </button>
          <button
            className="absolute top-[50%] right-0"
            onClick={handleRightScroll}
          >
            <img
              src={arrowIcon}
              alt="left_arrow_icon"
              className="-rotate-90 h-6 w-6 border-2 rounded-full p-1 box-content"
            />
          </button>
        </div>
        {/* button for left and right scroll */}
      </div>

      {/* Similar Movies */}
      <div className="my-10 md:w-[99vw] text-center  w-screen  md:px-4  2xl:px-28">
        <h1 className="text-white font-roboto text-2xl mb-4 md:text-left md:text-3xl md:px-7 lg:px-11  xl:px-9 2xl:px-2  font-extrabold">
          Similar Movies
        </h1>
        <div className=" flex flex-col  items-center justify-center gap-4 md:grid md:grid-cols-4 xl:grid-cols-5 md:gap-6 md:justify-items-center">
          {same &&
            same.results?.map((movie) => {
              return (
                <div key={movie.id}>
                  <Link
                    to={`/category/${movie.id}`}
                    className="md:flex md:flex-col w-screen md:w-full  relative  "
                  >
                    {movie.poster_path === null ? (
                      <img
                        src={poster}
                        alt={movie.poster_path}
                        className="  h-[300px]  w-[80vw]   rounded-lg hover:scale-95    opacity-75 "
                      />
                    ) : (
                      <img
                        src={`${Banner_Base_Url}/${movie.poster_path}`}
                        alt="Cast profile not available"
                        className="  h-[300px]  w-[80vw]   rounded-lg hover:scale-95     opacity-75 "
                      />
                    )}
                    <h1 className="text-white grid justify-items-center pr-4 font-roboto font-bold line-clamp-1">
                      {movie.original_title}
                    </h1>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
