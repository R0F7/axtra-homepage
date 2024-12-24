import { IoSearch } from "react-icons/io5";
import logo_white from "../../assets/logo-black.webp";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import RoutePage from "./RoutePage";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  return (
    <nav className="flex justify-between py-5 px-[50px] relative" id="">
      {/* logo */}
      <a to="#top">
        <img src={logo_white} alt="Nav logo" />
      </a>

      {/* menu */}
      {/* <div> */}
      <ul className="flex items-center gap-[90px] text-[#121212]">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PAGES</li>
        <li>SERVICES</li>
        <li>TEAM</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </ul>
      {/* </div> */}

      {/* search and hamburger menu */}
      <div className="flex items-center text-2xl gap-6">
        <div className="relative">
          <i className="" onClick={() => setToggle(!toggle)}>
            {toggle ? <FaXmark /> : <IoSearch />}
          </i>
          <div
            className={`absolute -right-12 p-4 bg-[#F0F0F0] rounded ${
              toggle ? "top-10 opacity-100" : "top-16 opacity-0"
            } transform duration-300`}
          >
            <input
              type="search"
              placeholder="Search..."
              className="w-[260px] placeholder:text-base p-2.5 h-[45px] rounded-md outline-none "
            />
          </div>
        </div>
        <div className="w-px bg-[#EFEFEF] h-5"></div>
        <div>
          <i onClick={() => setMenuOpen(true)}>
            <CgMenuRight />
          </i>
          <div className={`absolute top-0 left-0 w-full h-screen bg-[#121212] text-white ${menuOpen ? "scale-100" : "scale-0"}`}>
            <RoutePage setMenuOpen={setMenuOpen}></RoutePage>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
