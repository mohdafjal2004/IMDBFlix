import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../Utils/API";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const key = process.env.REACT_APP_API_KEY;

const Categories = () => {

   var settings = {
     dots: true,
     infinite: true,
     slidesToShow: 6,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 1000,
     pauseOnHover: true,
   };
  const image_Base_Url = "https://image.tmdb.org/t/p/w500";
  const [popular, setpopular] = useState({});

  const fetch = async () => {
    await axios
      .get(`/movie/popular?api_key=${key}`)
      .then((response) => setpopular(response.data));
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="ml-6 mr-5 mt-6 ">
      <h1 className="text-white text-left mb-3 font- font-bold text-2xl text">
        Popular on Netflix
      </h1>
      <Slider {...settings}>
        {popular &&
          popular.results &&
          popular.results.map((data) => {
            return (
              <Link
                to={`/category/${data.id}`}
                key={data.id}
                className="h-[330px]"
              >
                <img
                  src={`${image_Base_Url}/${data.poster_path}`}
                  alt=""
                  className="h-[350px] w-[250px] rounded hover:scale-95 translate-x-2 ease duration-200"
                />
              </Link>
            );
          })}
      </Slider>
    </div>
  );
};

export default Categories;
