import { useEffect, useState } from "react";
import axios from "../../Utils/API";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DiscoverCard from "../DiscoverCard";

const Trending = () => {
 
  const key = process.env.REACT_APP_API_KEY;

  const [details, setDetails] = useState([]);

  const getDetails = async () => {
    const response = await axios.get(
      `/trending/movie/week?api_key=${key}&language=en-US`
    );
    setDetails(response.data);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="text-white ">
      <div className=" md:px-6  2xl:px-8">
        <div>
          <h1 className="text-white text-left px-4 md:px-1  mb-3  font-bold text-2xl  ">
            Trending on Netflix
          </h1>
          <div className=" flex gap-4  md:pt-4  md:px-6  2xl:px-6  overflow-auto scrollbar-hide">
            {details &&
              details?.results?.map((item) => (
                <div
                  key={item.id}
                  className="  min-w-full min-h-[300px]  md:min-w-[200px] md:min-h-[200px]"
                >
                  <DiscoverCard item={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
// 
export default Trending;
