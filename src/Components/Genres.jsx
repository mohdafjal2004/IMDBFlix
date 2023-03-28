import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../Utils/API";
const key = process.env.REACT_APP_API_KEY;

const Genres = () => {
  const Navigate = useNavigate();
  const [genre, setGenre] = useState();
  console.log(genre);

  const getGenres = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`
    );
    setGenre(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getGenres();
  }, []);

  const handleOptions = (e) => {
    const genreId = e.target.value;
    Navigate(`/genres/${genreId}`);
  };

  return (
    <div>
      <h1>Select Genres</h1>
      <select name="Genres" onChange={handleOptions}>
        {genre &&
          genre.genres?.map((movie, index) => {
            return (
              <option value={movie.id} key={movie.id}>
                {movie.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};
export default Genres;
