import React, { useState } from "react";
import axios from "axios";
import loader from "./Assets/loader_animated.svg";
import supportImage from "./Assets/support_image.jpg";
import { Link } from "react-router-dom";

const Search = ({ setIsInputView, isInputView }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchResult = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.themoviedb.org/3/search/multi?query=${searchInput}&include_adult=true&language=en-US&page=1`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTYxOTZmYzNhZGY4MTEyMmRiZjM5NjI4MWZkYzRlZSIsInN1YiI6IjY0MWQzYzMxYmVmYjA5MDBlYTQ5YThhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TNdZWpEuJLxErC4ldz2ykpYcHedU6BWEbJVLpj2SCRw",
          },
        }
      );
      console.log(res);
      setSearchResults(res.data?.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const debounceFunc = (fetchResult) => {
    let timer;
    return function (e) {
      // Immmediately handling all the values from input state.
      setSearchInput(e.target.value);
      //   Clearing the previous timer
      clearTimeout(timer);

      //   Timer after each 2000ms
      timer = setTimeout(() => {
        fetchResult.apply(this, arguments);
      }, 2000);
    };
  };
  const handleInputChange = debounceFunc(fetchResult);

  const handleHideSearchBox = () => {
    setSearchInput("");
    setSearchResults([]);
    setIsInputView(!isInputView);
  };

  return (
    <div className="text-white  z-50 border-2 w-screen md:w-auto bg-black">
      <div className="flex flex-col p-4 gap-4 overflow-hidden">
        <input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          className="text-black p-1 focus:outline-none rounded-sm"
        />
        {loading ? (
          <div className="flex justify-center">
            <img src={loader} alt="loader_icon" className="h-8 w-8 " />
          </div>
        ) : searchResults.length > 0 ? (
          searchResults?.slice(0, 5).map((item) => (
            <div key={item.id} className="">
              <Link
                to={`/category/${item.id}`}
                className="flex  border items-center gap-2 p-1"
                onClick={handleHideSearchBox}
              >
                {item && item.backdrop_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${
                      item && item.backdrop_path
                    }`}
                    alt="backdrop_path"
                    className=" h-12 w-12"
                  />
                ) : (
                  <img
                    src={supportImage}
                    alt="backdrop_path"
                    className="support_Image h-12 w-12"
                  />
                )}
                <p className=" flex-1 truncate ">
                  {item?.original_title || item.original_name}
                </p>
              </Link>
            </div>
          ))
        ) : (
          <p>Not found...</p>
        )}

        {/* {searchResults && searchResults} */}
        <div className="flex w-full gap-3 font-bold text-red-500 text-lg">
          <button
            className="border flex-1 rounded-md bg-gray-800 py-1"
            onClick={handleHideSearchBox}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
