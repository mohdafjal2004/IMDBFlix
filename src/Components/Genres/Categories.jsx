import { useEffect, useState } from "react";
import axios from "../../Utils/API";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DiscoverCard from "../DiscoverCard";

const Categories = ({ apiPoint, heading }) => {
  const key = process.env.REACT_APP_API_KEY;

  const [popular, setpopular] = useState([]);

  const fetch = async () => {
    await axios(`${apiPoint}api_key=${key}&language=en-US`).then((response) =>
      setpopular(response.data)
    );
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="text-white ">
      <div className=" md:px-6  2xl:px-8">
        <div>
          <h1 className="text-white text-left px-4 md:px-1  mb-3  font-bold text-2xl  ">
            {heading}
          </h1>
          <div className=" flex gap-4  md:pt-4  md:px-6  2xl:px-4   overflow-auto scrollbar-hide">
            {popular &&
              popular?.results?.map((item) => (
                <div
                  key={item.id}
                  className="  min-w-full min-h-[300px]  md:min-w-[200px] md:min-h-[200px]"
                >
                  <DiscoverCard item={item} menuType="movie" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
