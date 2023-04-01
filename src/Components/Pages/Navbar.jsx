import logo from "../Assets/netflix.svg";
import bell from "../Assets/bellsvg.svg";
import avatar from "../Assets/avatar.png";
import search from "../Assets/search.png";



const Navbar = () => {
  return (
    <nav className="overflow-hidden relative  shadow-2xl shadow-zinc-900 ">
      <div className="flex flex-row  bg-black  items-center h-16 ">
        <div className="flex w-1/2 absolute left-5 sm:left-10 ">
          <div>
            <img src={logo} alt="logo" className="max-w-md  w-24 inline" />
          </div>

          <div>
            <select className="w-16 absolute  md:hidden appearance-none left-28 bg-black text-white  ">
              <option value="Menu">Menu</option>
              <option value="home">Home</option>
              <option value="tv ">TV Shows</option>
              <option value="movies">Movies</option>
              <option value="new">New and Popular</option>
            </select>
          </div>
          <div className="invisible md:visible inline">
            <ul className="flex text-white   space-x-5 absolute left-36 lg:text-lg ">
              <li>Home</li>
              <li className="md:truncate md:overflow-hidden">TV Shows</li>
              <li>Movies</li>
              <li className="md:truncate md:overflow-hidden">
                New and Popular
              </li>
            </ul>
          </div>
        </div>
        <div className="flex  absolute right-10 space-x-3 ">
          <img src={search} alt="" className="w-5  h-5 mt-1 " />

          <img src={bell} alt="bell icon" className="w-7  h-7 mx-2 " />
          <img src={avatar} alt="Account logo" className="w-7  h-7 inline" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
