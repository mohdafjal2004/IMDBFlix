import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../Utils/API";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Horror = () => {
  const key = process.env.REACT_APP_API_KEY;
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 1500,
      pauseOnHover: true,

      responsive: [
        {
          breakpoint: 1536,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

  const image_Base_Url = "https://image.tmdb.org/t/p/w500";

  const [details, setDetails] = useState();

  const getDetails = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=${key}&language=en-US`
    );
    setDetails(response.data);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="ml-12  sm:ml-6 duo:ml-6 mr-5 mt-8 text-center ">
      <h1 className="text-white text-left mb-3 font- font-bold text-2xl text">
        Horror Movies
      </h1>
      <Slider {...settings}>
        {details &&
          details?.results.map((movie) => {
            return (
              <div key={movie.id}>
                <h1>{movie.original_title}</h1>
                <Link to={`/category/${movie.id}`}>
                  <img
                    src={`${image_Base_Url}/${movie.poster_path}`}
                    alt=""
                    className="h-[400px] w-[300px] duo:w-[200px] 2xl: sixh:w-[180px]  2xl:w-[250px] rounded hover:scale-95 translate-x-2 ease duration-200   "
                  />
                </Link>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Horror;
