import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../Utils/API";
const key = process.env.REACT_APP_API_KEY;

const CastDetails = () => {
  const [details, setDetails] = useState([]);
  console.log(details);
  const { castId } = useParams();

  const fetchCast = async () => {
    try {
      const response = await axios.get(`/person/${castId}?api_key=${key}`);
      setDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCast();
  }, []);

  return (
    <div>
        <h1>{details.name}</h1>
      Cast Details here:
      <div>
        {details &&
          details?.data &&
          details.data.map((crew) => {
            return (
              <div key={crew?.id}>
                <h1>{crew && crew.biography}</h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CastDetails;
