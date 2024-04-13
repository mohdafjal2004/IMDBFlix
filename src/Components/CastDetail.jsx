import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../Utils/API";
import poster from "./Assets/else.jpg";

const key = process.env.REACT_APP_API_KEY;
const image_Base_Url = "https://image.tmdb.org/t/p/w500";

const CastDetails = () => {
  const [details, setDetails] = useState([]);
  const [credits, setCredits] = useState([]);
  const first50 = credits.slice(0, 50);
  console.log(first50);
  const { castId } = useParams();

  const fetchCast = async () => {
    try {
      const response = await axios.get(`/person/${castId}?api_key=${key}`);
      setDetails(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const allmovies = async () => {
    try {
      const response = await axios.get(
        `/person/${castId}/movie_credits?api_key=${key}`
      );
      setCredits(response.data.cast);
      console.log(response.data.cast);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCast();
    allmovies();
  }, [castId]);

  return (
    <div className="parent ">
      {/* Fetching Details of the Cast */}
      <div className="cast_detail_outside  sm:flex sm:items-start  bg-slate-800   h-auto pb-10 bg-cover pt-6 md:pt-16">
        <div className="cast_detail_inside  sm:py-10 " />
        <div className="relative    py-10 px-6 pl-10 fourh:pl-16">
          <img
            src={`${image_Base_Url}/${details.profile_path}`}
            alt=""
            className="rounded-lg w-72  "
          />
        </div>

        <div className="text-white sm:w-2/3  pt-10 px-6 pl-10 text-left">
          <h2 className="text-sm font-roboto font-semibold">
            {details.known_for_department}
          </h2>
          <h1 className="text-2xl font-roboto font-bold my-3">
            {details && details.name}
          </h1>
          <p className="my-2 text-sm text-gray-300">
            {details.birthday} in {details.place_of_birth}
          </p>

          <p className="font-roboto sm:font-bold md:text-base text-sm ">
            {details.biography}
          </p>
        </div>
      </div>

      {/* Fetching all movies of the cast */}
      {/* <div className="ml-12  sm:ml-6 duo:ml-6 mr-5 mt-14  ">
        <h1 className="text-white font-roboto text-2xl duo:text-3xl duo:text-left  font-extrabold sm:ml-7 mb-10">
          Related Movies
        </h1>
        <div className="mx-2 grid md:grid-cols-4 duo:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 ">
          {first50 &&
            first50.map((movies) => {
              return (
                <div key={movies.id}>
                  <Link
                    to={`/category/${movies.id}`}
                    className="md:flex md:flex-col w-screen md:w-full  relative  "
                  >
                    <img
                      src={`${image_Base_Url}/${movies.poster_path}`}
                      alt=""
                      className="h-[300px] w-[250px] duo:w-[200px] 2xl: sixh:w-[180px]  2xl:w-[250px] rounded-lg hover:scale-95 translate-x-2 ease duration-200    opacity-75"
                    />
                    <h3 className="text-white grid justify-items-center pr-4 font-roboto font-bold mb-10">
                      {movies.original_title}
                    </h3>
                  </Link>
                </div>
              );
            })}
        </div>
      </div> */}
      <div className="my-10 md:w-[99vw] text-center  w-screen  md:px-4  2xl:px-28">
        <h1 className="text-white font-roboto text-2xl mb-4 md:text-left md:text-3xl md:px-7 lg:px-11  xl:px-9 2xl:px-2  font-extrabold">
          Related Movies
        </h1>
        <div className=" flex flex-col  items-center justify-center gap-4 md:grid md:grid-cols-4 xl:grid-cols-5 md:gap-6 md:justify-items-center">
          {first50 &&
            first50?.map((movies) => {
              return (
                <div key={movies.id}>
                  <Link
                    to={`/category/${movies.id}`}
                    className="md:flex md:flex-col w-screen md:w-full  relative  "
                  >
                    {movies.poster_path === null ? (
                      <img
                        src={poster}
                        alt={movies.poster_path}
                        className="  h-[300px]  w-[80vw]   rounded-lg hover:scale-95    opacity-75 "
                      />
                    ) : (
                      <img
                        src={`${image_Base_Url}/${movies.poster_path}`}
                        alt="Cast profile not available"
                        className="  h-[300px]  w-[80vw]   rounded-lg hover:scale-95     opacity-75 "
                      />
                    )}
                    <h1 className="text-white grid justify-items-center mt-2 mb-4 pr-4 font-roboto font-bold line-clamp-1">
                      {movies.original_title}
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

export default CastDetails;
