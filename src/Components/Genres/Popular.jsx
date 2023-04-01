import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../Utils/API";

const key = process.env.REACT_APP_API_KEY;

const Categories = () => {
  const image_Base_Url = "https://image.tmdb.org/t/p/w500";
  const [popular, setpopular] = useState({});
  console.log(popular);

  const listRef = useRef();

  const fetch = async () => {
    await axios
      .get(`/movie/popular?api_key=${key}`)
      .then((response) => setpopular(response.data));
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleClick = (direction) => {
    if (direction === "left") {
      listRef.current.style.transform = "translateX(230px)";
    }
  };

  return (
    <div className=" overflow-hidden relative">
      <button
        onClick={() => handleClick("left")}
        className="w-50 text-white bg-zinc-800 px-2 absolute w-auto top-24 left-0 h-[100px] text-4xl z-10"
      >
        {"< "}
      </button>
      <div ref={listRef} className="wrapper flex w-max">
        {popular &&
          popular.results &&
          popular.results.map((data) => {
            return (
              <div key={data.id}>
                <Link to={`/category/${data.id}`}>
                  <img
                    src={`${image_Base_Url}/${data.poster_path}`}
                    alt=""
                    className="mr-3 w-[200px] rounded-md h-[300px]  inline-block hover:scale-105 ease-in-out duration-300 translate-x-0"
                  />
                </Link>
              </div>
            );
          })}
      </div>
      <button
        onClick={() => handleClick("right")}
        className="w-50 text-white bg-zinc-800 px-2 absolute w-auto top-24 right-0 h-[100px] text-4xl z-10"
      >
        {" >"}
      </button>
    </div>
  );
};

export default Categories;
