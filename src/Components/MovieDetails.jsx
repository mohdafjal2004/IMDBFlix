import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../Utils/API";
const key = process.env.REACT_APP_API_KEY;

const MovieDetails = () => {
  const Banner_Base_Url = "https://image.tmdb.org/t/p/w500";
  const { id } = useParams();
  const [Api, setApi] = useState("");
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

  return (
    <div className="parent">
      <div className="movie_detail_outside  relative h-auto  ">
        <div
          className="movie_detail_inside sm:flex sm:flex-row flex flex-col  sm:h-[500px] h-auto
         bg-slate-800 w-screen md:p-10 md:pl-32  items-center py-8 px-2 sm:p-7 relative"
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
              <p className="text-xs font-roboto">{Api && Api.tagline}</p>
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

      <div className="bg-slate-300">
        {cast &&
          cast.cast?.map((data) => {
            return (
              <Link to={`/castDetails/${data.id}`} key={data.id}>
                {data.name}
              </Link>
            );
          })}
      </div>

      <div>
        {same.results?.map((movie) => {
          return (
            <div key={movie.id}>
              <h1>{movie.original_title}</h1>
              <Link to={`/category/${movie.id}`}>
                <img src={`${Banner_Base_Url}/${movie.backdrop_path}`} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MovieDetails;
