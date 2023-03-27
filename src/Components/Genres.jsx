import { useEffect, useState } from "react";
import axios from "../Utils/API";

const Genres = () => {
  const [genre, setGenre] = useState();
  console.log(genre);

  const getGenres = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3//genre/movie/list?api_key=f96196fc3adf81122dbf396281fdc4ee&language=en-US`
    );
    setGenre(response.data);
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <div>
      <h1>Select Genres</h1>
      <select name="Genres">
        {genre &&
          genre.genres?.map((movie) => {
            return <option>{movie.name}</option>;
          })}
      </select>
    </div>
  );
};
export default Genres;
