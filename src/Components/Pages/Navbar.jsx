import logo from "../Assets/netflix.svg";
import bell from "../Assets/bellsvg.svg";
import avatar from "../Assets/avatar.png";
import search from "../Assets/search.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isView, setIsView] = useState(false);
  const handleDropDown = () => {
    setIsView(!isView);
  };

  return (
    <nav className="">
      <div className="flex justify-between items-center h-16 border px-4 md:px-7">
        {/* Logo + Menus */}
        <div className="flex gap-2 md:gap-6 items-center ">
          <Link to="/">
            <img src={logo} alt="logo" className="w-20 inline" />
          </Link>

          {/* For mobile screen */}
          <div className="md:hidden">
            <p className="cursor-pointer text-white relative" onClick={handleDropDown} >
              Menu
            </p>
            {isView && (
              <div className="absolute top-16 left- bg-black  text-white border border-gray-300 py-2  z-10 px-1 box-content ">
                <ul className="inline-block">
                  <li className="border-b"  >Home</li>
                  <li className="border-b">TV Shows</li>
                  <li className="border-b">Movies</li>
                  <li className="border-b">New & Popular</li>
                </ul>
              </div>
            )}
          </div>

          {/* For medium screen */}
          <div className="hidden md:flex text-white space-x-5 ">
            <ul className="flex  gap-8">
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
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
