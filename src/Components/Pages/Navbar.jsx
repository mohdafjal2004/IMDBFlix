import logo from "../Assets/netflix.svg";
import bell from "../Assets/bellsvg.svg";
import avatar from "../Assets/avatar.png";
import search from "../Assets/search.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../Search";

const Navbar = () => {
  const [isView, setIsView] = useState(false);
  const [isInputView, setIsInputView] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const handleDropDown = () => {
    setIsView(!isView);
  };

  const handleInputView = () => {
    setIsInputView(!isInputView);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);
  return (
    <nav
      className={`fixed top-0 z-50 transition-bg duration-1000 ease-in-out w-full ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-16   md:px-12  2xl:px-28 px-4">
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
              <div
                className={`absolute min-w-[99%] left-0 ${
                  isView ? "top-16" : "-top-10"
                }   bg-black  text-white border border-gray-300   z-10  box-content `}
              >
                <ul
                  className="inline-block border w-full "
                  onClick={() => setIsView(false)}
                >
                  <li className="border-b py-1">
                    <Link to="/" className="cursor-pointer">
                      Home
                    </Link>
                  </li>
                  <li className="border-b py-1">
                    <Link
                      to="/type"
                      state={{ menuType: "tv" }}
                      className="cursor-pointer"
                    >
                      TV Shows
                    </Link>
                  </li>
                  <li className="border-b py-1">
                    <Link
                      to="/type"
                      state={{ menuType: "movie" }}
                      className="cursor-pointer"
                    >
                      Movies
                    </Link>
                  </li>
                  <li className="border-b py-1">New & Popular</li>
                </ul>
              </div>
            )}
          </div>

          {/* For medium screen */}
          <div className="hidden md:flex  space-x-5  ">
            <ul className="flex  gap-8 text-gray-300 ">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/type"
                  state={{ menuType: "tv" }}
                  className="hover:text-white"
                >
                  TV Shows
                </Link>
              </li>
              <li>
                <Link
                  to="/type"
                  state={{ menuType: "movie" }}
                  className="hover:text-white"
                >
                  Movies
                </Link>
              </li>
              <li className="hover:text-white cursor-pointer">New and Popular</li>
            </ul>
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-1">
          <img
            src={search}
            alt="searchIcon"
            className="w-5 h-5 mt-1 cursor-pointer"
            onClick={handleInputView}
          />
          <img src={bell} alt="bell icon" className="w-7 h-7 mx-2" />
          <img src={avatar} alt="Account logo" className="w-7 h-7 inline" />
        </div>

        <div
          className={`absolute right-0 md:right-24  z-50 transition-all ease-out  duration-300 ${
            isInputView ? "  -top-[1000px]" : " top-16"
          }`}
        >
          <Search isInputView={isInputView} setIsInputView={setIsInputView} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
