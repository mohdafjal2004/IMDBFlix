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
      .get(`/movie/${id}?api_key=${key}`)
      .then((response) => setApi(response.data))
      // .then((abc) => console.log(abc?.genres.name));
  };

  const fetchCast = () => {
    axios
      .get(`/movie/${id}/credits?api_key=${key}`)
      .then((response) => setCast(response.data));
  };

  const similar = () => {
    axios
      .get(`/movie/${id}/similar?api_key=${key}`)
      .then((response) => setSame(response.data));
  };

  useEffect(() => {
    fetchDetails();
    fetchCast();
    similar();
  }, [id]);
  const rating = Math.round(Api.vote_average);

  return (
    <div>
      <h1>Movie details of id: {id} here</h1>
      <h3>{Api && Api.tagline}</h3>
      <p> Rating: {rating}/10</p>
      <h1>{Api && Api.original_title}</h1>
      <h1>Release Date : {Api && Api.release_date}</h1>
      <h1>Run time : {Api && Api.runtime} min</h1>
      <img src={`${Banner_Base_Url}/${Api.backdrop_path}`} alt="" />

      <div>
        {Api &&
          Api.genres?.map((genre) => {
            return <p key={genre.id}>{genre.name}</p>;
          })}
      </div>
      <div>
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
        return  (
          <div>
        <h1>{movie.original_title}</h1>
        <img src={`${Banner_Base_Url}/${movie.backdrop_path}`} alt="" />;

        </div>
        )})}
      </div>


    </div>
  );
};
export default MovieDetails;
