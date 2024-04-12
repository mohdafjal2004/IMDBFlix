import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DiscoverCard from "../DiscoverCard";
import loader from "../Assets/loader_animated.svg";

const Type = () => {
  const location = useLocation();
  const { menuType } = location.state;

  const [apiData, setApiData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [loading, setLoading] = useState(false);
  console.log(loading);

  const fetch = async () => {
    setLoading(true);
    try {
      if (menuType) {
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/${menuType}?include_adult=true&include_null_first_air_dates=false&language=en-US&page=${currPage}&sort_by=popularity.desc`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTYxOTZmYzNhZGY4MTEyMmRiZjM5NjI4MWZkYzRlZSIsInN1YiI6IjY0MWQzYzMxYmVmYjA5MDBlYTQ5YThhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TNdZWpEuJLxErC4ldz2ykpYcHedU6BWEbJVLpj2SCRw",
            },
          }
        );

        setApiData(res.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrPage(1);
  }, [menuType]);

  useEffect(() => {
    fetch();
  }, [currPage, menuType]);

  const handleLoadMore = () => {
    setCurrPage((prevPage) => prevPage + 1);
  };
  const handleLoadPrevios = () => {
    if (currPage > 1) setCurrPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="text-white ">
      {loading ? (
        <p className="flex flex-nowrap justify-center min-h-screen ">
          <img src={loader} alt="loader_icon" className="p-20" />
        </p>
      ) : (
        <div>
          <div>
            <h1 className="text-left md:px-6  2xl:px-24 px-4 my-5 text-2xl font-semibold">
              Discover here
            </h1>
            <div className="flex flex-wrap  justify-center items-center gap-6 md:px-6  2xl:px-24 md:justify-between  overflow-x-hidden  py-5  md:pb-28">
              {apiData &&
                apiData?.results?.map((item) => (
                  <div
                    key={item.id}
                    className=" duo:w-52 lg:w-72 xl:w-64 box-border "
                  >
                    <DiscoverCard item={item} />
                  </div>
                ))}
            </div>
          </div>
          {!loading ? (
            <div className="my-7 grid grid-cols-2 gap-4  px-4 md:px-6  2xl:px-24 md:font-semibold text-lg">
              <button
                className=" border py-2 px-1 text-sm md:px-4  md:justify-self-start rounded-md"
                onClick={handleLoadPrevios}
              >
                Load Previous...
              </button>
              <button
                className="border py-2 px-1 text-sm md:px-4 md:justify-self-start rounded-md"
                onClick={handleLoadMore}
              >
                Load More...
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default Type;
