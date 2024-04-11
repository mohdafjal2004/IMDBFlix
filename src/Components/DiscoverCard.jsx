import { useEffect, useState } from "react";
import supportImage from "./Assets/support_image.jpg";
import { Link, useNavigate } from "react-router-dom";
import playBtn from "./Assets/play.png";
import plusBtn from "./Assets/push.png";
import likeBtn from "./Assets/like.png";
import arrowBtn from "./Assets/arrow.png";

const DiscoverCard = ({ item }) => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  const percentageVote = item && (item.vote_average / 10) * 100;

 


  return (
    <div
      className=" rounded-md "
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <div className="flex flex-col items-center md: duo:static md:hover:scale-125  hover:scale-95 transition-scale duration-300 hover:rounded-lg ">
        {/* Image logic */}
        {item && item.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${
              item && item.backdrop_path
            }`}
            alt="backdrop_path"
            className="rounded-xl"
          />
        ) : (
          <img
            src={supportImage}
            alt="backdrop_path"
            className="support_Image"
          />
        )}
        {showDetails  && (
          <div className="absolute -bottom-16 z-50  bg- w-full bg-gray-900  pb-3 rounded-b-lg">
            {/* Action row */}
            <div className="flex justify-between p-2">
              {/* Left side of action row */}
              <div className="flex gap-1 cursor-pointer">
                <img
                  src={playBtn}
                  alt="play_Btn"
                  className="rounded-full border-gray-200 border-2  w-6 h-6 p-1"
                  title="Play Now"
                />
                <img
                  src={plusBtn}
                  alt="Add_to_list_Btn"
                  className="rounded-full border w-6 h-6 p-1"
                  title="Add to Favourites"
                />
                <img
                  src={likeBtn}
                  alt="like_Btn"
                  className="rounded-full border w-6 h-6 p-1"
                  title="like button"
                />
                <img
                  src={likeBtn}
                  alt="dislike_Btn"
                  className="rounded-full border w-6 h-6 p-1 rotate-180"
                  title="dislike button"
                />
              </div>
              {/* Right side of action row */}

              <Link to={`/category/${item.id}`}>
                <img
                  src={arrowBtn}
                  alt="details_arrow_btn"
                  className="rounded-full border-2 w-6 h-6 p-1 animate-pulse"
                  title="Details Page"
                />
              </Link>
            </div>
            <div className="text-left px-2 font-bold">
              <p className="truncate">
                {item.original_name || item.original_title}
              </p>
              <p className="text-green-500 text-sm">
                {percentageVote && percentageVote.toFixed(2)}% Match
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscoverCard;
