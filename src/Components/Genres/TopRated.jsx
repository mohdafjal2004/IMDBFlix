import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../Utils/API";
const key = process.env.REACT_APP_API_KEY;

const TopRated = () => {
  const image_Base_Url = "https://image.tmdb.org/t/p/w500";
  const [top, setTop] = useState({});
  console.log(top);

  const fetch = async () => {
    await axios
      .get(`/movie/top_rated?api_key=${key}`)
      .then((response) => setTop(response.data));
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      {top &&
        top.results &&
        top.results.map((data) => {
          return (
            <h1 key={data.id}>
              <p>{data.original_title}</p>
              <Link to={`/category/${data.id}`}>
                <img src={`${image_Base_Url}/${data.poster_path}`} alt="" />
              </Link>
            </h1>
          );
        })}
    </div>
  );
};

export default TopRated;
