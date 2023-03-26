import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../Utils/API";
const key = process.env.REACT_APP_API_KEY;
  const image_Base_Url = "https://image.tmdb.org/t/p/w500";


const CastDetails = () => {
  const [details, setDetails] = useState([]);
  console.log(details);
  const { castId } = useParams();

  const fetchCast = async () => {
    try {
      const response = await axios.get(`/person/${castId}?api_key=${key}`);
      setDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCast();
  }, []);

  return (
    <div>
      <h1>{details && details.name}</h1>
      Cast Details here:
      <div>{details.birthday}</div>
      <div>
        <img src={`${image_Base_Url}/${details.profile_path}`} alt="" />
        <p>{details.biography}</p>
        <p>{details.place_of_birth}</p>
        <h2>{details.known_for_department}</h2>
      </div>
    </div>
  );
};

export default CastDetails;
