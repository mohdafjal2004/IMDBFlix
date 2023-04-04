import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../Utils/API";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trending = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };

  const key = process.env.REACT_APP_API_KEY;
  const image_Base_Url = "https://image.tmdb.org/t/p/w500";

  const [details, setDetails] = useState();

  const getDetails = async () => {
    const response = await axios.get(`/trending/movie/week?api_key=${key}`);
    setDetails(response.data);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="ml-6 mr-5 mt-8">
      <h1 className="text-white text-left mb-3 font- font-bold text-2xl text">
        Trending on Netflix
      </h1>
      <Slider {...settings}>
        {details &&
          details?.results.map((movie) => {
            return (
              <Link to={`/category/${movie.id}`} key={movie.id}>
                <img
                  src={`${image_Base_Url}/${movie.poster_path}`}
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

export default Trending;
