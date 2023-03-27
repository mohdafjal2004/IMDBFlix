import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../Utils/API";
const key = process.env.REACT_APP_API_KEY;
const image_Base_Url = "https://image.tmdb.org/t/p/w500";

const CastDetails = () => {
  const [details, setDetails] = useState([]);
  const [credits, setCredits] = useState([]);
  const first50 = credits.slice(0, 50);
  console.log(first50);
  const { castId } = useParams();

  const fetchCast = async () => {
    try {
      const response = await axios.get(`/person/${castId}?api_key=${key}`);
      setDetails(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const allmovies = async () => {
    try {
      const response = await axios.get(
        `/person/${castId}/movie_credits?api_key=${key}`
      );
      setCredits(response.data.cast);
      console.log(response.data.cast);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCast();
    allmovies();
  }, []);

  return (
    <div>
      {/* Fetching Details of the Cast */}
      <h1>{details && details.name}</h1>
      Cast Details here:
      <div>{details.birthday}</div>
      <div>
        <img src={`${image_Base_Url}/${details.profile_path}`} alt="" />
        <p>{details.biography}</p>
        <p>{details.place_of_birth}</p>
        <h2>{details.known_for_department}</h2>
      </div>
      {/* Fetching all movies of the cast */}
      <div></div>
      {first50 &&
        first50.map((movies) => {
          return (
            <div key={movies.id}>
              <Link to={`/category/${movies.id}`}>
                <img src={`${image_Base_Url}/${movies.poster_path}`} alt="" />
                <h3>{movies.original_title}</h3>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default CastDetails;
