import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../Utils/API";
import Slider from "react-slick";
import man from "./Assets/man.png";
import poster from "./Assets/else.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const key = process.env.REACT_APP_API_KEY;

const MovieDetails = () => {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Banner_Base_Url = "https://image.tmdb.org/t/p/w500";
  const image_Base_Url = "https://image.tmdb.org/t/p/original";

  const { id } = useParams();
  const [Api, setApi] = useState("");
  console.log(Api)
  const [cast, setCast] = useState([]);
  const [same, setSame] = useState([]);
  console.log(same);

  const fetchDetails = () => {
    axios
      .get(`/movie/${id}?api_key=${key}&language=en-US`)
      .then((response) => setApi(response.data));
    // .then((abc) => console.log(abc?.genres.name));
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

  return (
    <div className="parent ">
      <div className="movie_detail_outside  h-auto  ">
        <div
          className="movie_detail_inside sm:flex sm:flex-row flex flex-col  sm:h-[500px] h-auto
          w-screen md:p-10 md:pl-32  items-center py-8 px-2 sm:p-7 relative  bg-center bg-cover border-4"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="relative">
            <img
              src={`${Banner_Base_Url}/${Api.poster_path}`}
              alt=""
              className="rounded-lg  w-72 "
            />
          </div>
          <div className="text-white ml-3 sm:ml-7 xl:pb-[150px] 2xl:pb-[170px]  sm:text-left sm:w-1/2 pt-8 space-y-2 h-auto ">
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

      <div className="ml-12  sm:ml-6 duo:ml-6 mr-5 mt-14 mb-7 text-center ">
        <h1 className="text-white font-roboto text-2xl duo:text-3xl sm:text-left  font-extrabold">
          Cast
        </h1>
        <Slider {...settings}>
          {cast &&
            cast.cast?.map((data) => {
              return (
                <Link to={`/castDetails/${data.id}`} key={data.id}>
                  <div className="relative">
                    <p>{data.name}</p>
                    {data.profile_path === null ? (
                      <img
                        src={man}
                        alt={data.profile_path}
                        className="h-[300px] w-[250px] duo:w-[200px] 2xl: sixh:w-[180px]  2xl:w-[250px] rounded-lg hover:scale-95 translate-x-2 ease duration-200   opacity-75"
                      />
                    ) : (
                      <img
                        src={`${Banner_Base_Url}/${data.profile_path}`}
                        alt="Cast profile not available"
                        className="h-[300px] w-[250px] duo:w-[200px] 2xl: sixh:w-[180px]  2xl:w-[250px] rounded-lg hover:scale-95 translate-x-2 ease duration-200    opacity-75"
                      />
                    )}
                    <div className="text-white flex flex-col absolute top-10 px-20 pt-52  ">
                      <p className=" font-roboto font-semibold">
                        {data.original_name}
                      </p>
                      <p className=" font-roboto ">{data.character}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </Slider>
      </div>

      <div className="ml-12  sm:ml-6 duo:ml-6 mr-5 mt-14 ">
        <h1 className="text-white font-roboto text-2xl duo:text-3xl sm:text-left  font-extrabold">
          Similar Movies
        </h1>
        <div className="mx-2 grid md:grid-cols-4 duo:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 ">
          {same.results?.map((movie) => {
            return (
              <div key={movie.id}>
                <Link to={`/category/${movie.id}`}>
                  {movie.poster_path === null ? (
                    <img
                      src={poster}
                      alt={movie.poster_path}
                      className="h-[300px] w-[250px] duo:w-[200px] 2xl: sixh:w-[180px]  2xl:w-[250px] rounded-lg hover:scale-95 translate-x-2 ease duration-200  "
                    />
                  ) : (
                    <img
                      src={`${Banner_Base_Url}/${movie.poster_path}`}
                      alt="Cast profile not available"
                      className="h-[300px] w-[250px] duo:w-[200px] 2xl: sixh:w-[180px]  2xl:w-[250px] rounded-lg hover:scale-95 translate-x-2 ease duration-200    opacity-75"
                    />
                  )}
                  <h1 className="text-white grid justify-items-center pr-4 font-roboto font-bold">
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
