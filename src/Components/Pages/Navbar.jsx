import logo from "../Assets/netflix.svg";
import bell from "../Assets/bellsvg.svg";
import avatar from "../Assets/avatar.png";
import search from "../Assets/search.png";
import menu from "../Assets/h-menu.png";

const Navbar = () => {
  return (
    <nav className="">
      <div className="  flex flex-row bg-black  items-center h-16  py-5  px-[-200px] ">
        <div className="flex w-1/2 absolute left-10">
          <div>
            <img src={logo} alt="logo" className="max-w-md  w-24" />
          </div>

          <div>
            <button className="w-7 absolute right-1 md:hidden">
              <img src={menu} alt="" />
            </button>
          </div>
          <div className="invisible md:visible">
            <ul className="flex text-white text-xs sm:text-sm  space-x-5 absolute left-36">
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New and Popular</li>
            </ul>
          </div>
        </div>
        <div className="flex  absolute right-10 ">
          <img src={search} alt="" className="w-5  h-5 mt-1 " />

          <img src={bell} alt="bell icon" className="w-7  h-7 mx-2 " />
          <img src={avatar} alt="Account logo" className="w-7  h-7" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
