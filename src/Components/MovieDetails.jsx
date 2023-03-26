import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../Utils/API";
const key = process.env.REACT_APP_API_KEY;

const MovieDetails = () => {
  const Banner_Base_Url = "https://image.tmdb.org/t/p/w500";
  const { id } = useParams();
  const [Api, setApi] = useState("");
  const [cast, setCast] = useState([]);
  console.log(cast);

  const fetchDetails = () => {
    const res = axios
      .get(`/movie/${id}?api_key=${key}`)
      .then((response) => setApi(response.data));
  };

  const fetchCast = () => {
    const res = axios
      .get(`/movie/${id}/credits?api_key=${key}`)
      .then((response) => setCast(response.data));
  };

  useEffect(() => {
    fetchDetails();
    fetchCast();
  }, [id]);

  return (
    <div>
      <h1>Movie details of id: {id} here</h1>
      <h1>{Api && Api.original_title}</h1>
      <img src={`${Banner_Base_Url}/${Api.backdrop_path}`} alt="" />
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
    </div>
  );
};
export default MovieDetails;
