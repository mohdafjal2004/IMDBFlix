import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../Utils/API";
const key = process.env.REACT_APP_API_KEY;

const Categories = () => {
  const image_Base_Url = "https://image.tmdb.org/t/p/w500";
  const [popular, setpopular] = useState({});


  const fetch = async () => {
    await axios
      .get(`/movie/popular?api_key=${key}`)
      .then((response) => setpopular(response.data));
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      {popular &&
        popular.results &&
        popular.results.map((data) => {
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

export default Categories;
