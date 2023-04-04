import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../Utils/API";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const key = process.env.REACT_APP_API_KEY;

const TopRated = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };
  const image_Base_Url = "https://image.tmdb.org/t/p/w500";
  const [top, setTop] = useState({});

  const fetch = async () => {
    await axios
      .get(`/movie/top_rated?api_key=${key}`)
      .then((response) => setTop(response.data));
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="ml-6 mr-5 mt-8">
      <h1 className="text-white text-left  font- font-bold text-2xl text">
        Top-Rated
      </h1>
      <Slider {...settings}>
        {top &&
          top.results &&
          top.results.map((data) => {
            return (
              <h1 key={data.id}>
                <p>{data.original_title}</p>
                <Link to={`/category/${data.id}`}>
                  <img
                    src={`${image_Base_Url}/${data.poster_path}`}
                    alt=""
                    className="h-[350px] w-[250px] rounded hover:scale-95 translate-x-2 ease duration-200"
                  />
                </Link>
              </h1>
            );
          })}
      </Slider>
    </div>
  );
};

export default TopRated;
