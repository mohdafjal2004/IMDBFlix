import logo from "../Assets/netflix.svg";
import bell from "../Assets/bellsvg.svg";
import avatar from "../Assets/avatar.png";
import search from "../Assets/search.png";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isView, setIsView] = useState(false);
  const handleDropDown = () => {
    setIsView(!isView);
  };

  return (
    <nav className="">
      <div className="flex justify-between items-center h-16   md:px-6  2xl:px-24 px-4">
        {/* Logo + Menus */}
        <div className="flex gap-4 md:gap-6 items-center text-lg">
          <Link to="/">
            <img src={logo} alt="logo" className="w-20 inline" />
          </Link>

          {/* For mobile screen */}
          <div className="md:hidden">
            <p
              className="cursor-pointer text-white relative"
              onClick={handleDropDown}
            >
              Browse
            </p>
            {isView && (
              <div className="absolute top-16  bg-black  text-white border border-gray-300 py-2  z-10 px-1 box-content ">
                <ul className="inline-block" onClick={() => setIsView(false)}>
                  <li className="border-b ">
                    <Link to="/" className="cursor-pointer">
                      Home
                    </Link>
                  </li>
                  <li className="border-b">
                    <Link
                      to="/type"
                      state={{ menuType: "tv" }}
                      className="cursor-pointer"
                    >
                      TV Shows
                    </Link>
                  </li>
                  <li className="border-b">
                    <Link
                      to="/type"
                      state={{ menuType: "movie" }}
                      className="cursor-pointer"
                    >
                      Movies
                    </Link>
                  </li>
                  <li className="border-b">New & Popular</li>
                </ul>
              </div>
            )}
          </div>

          {/* For medium screen */}
          <div className="hidden md:flex text-white space-x-5 ">
            <ul className="flex  gap-8">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/type" state={{ menuType: "tv" }}>
                  TV Shows
                </Link>
              </li>
              <li>
                <Link to="/type" state={{ menuType: "movie" }}>
                  Movies
                </Link>
              </li>
              <li>New and Popular</li>
            </ul>
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-1">
          <img src={search} alt="searchIcon" className="w-5 h-5 mt-1" />
          <img src={bell} alt="bell icon" className="w-7 h-7 mx-2" />
          <img src={avatar} alt="Account logo" className="w-7 h-7 inline" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
