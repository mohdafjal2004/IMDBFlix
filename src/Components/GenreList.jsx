import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../Utils/API";

const GenreList = () => {
  const image_Base_Url = "https://image.tmdb.org/t/p/w500";
    const key = process.env.REACT_APP_API_KEY;


  const { genreId } = useParams();
  console.log(genreId)
  const [details, setDetails] = useState();

  const getDetails = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&api_key=${key}&language=en-US`
    );
    setDetails(response.data);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <h1>
      Genres Movies here
      {details  && details?.results.map((movie) => {
        return (
          <div key={movie.id}>
            <h1>{movie.original_title}</h1>
            <Link to={`/category/${movie.id}`}>
              <img src={`${image_Base_Url}/${movie.poster_path}`} alt="" />
            </Link>
          </div>
        );
      })}
    </h1>
  );
};

export default GenreList;
