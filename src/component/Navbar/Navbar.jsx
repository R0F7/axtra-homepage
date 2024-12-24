import { IoSearch } from "react-icons/io5";
import logo from "../../assets/logo-black.webp";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToogle] = useState(false);

  return (
    <nav className="flex justify-between py-5 px-[50px]" id="">
      {/* logo */}
      <a to="#top">
        <img src={logo} alt="Nav logo" />
      </a>

      {/* menu */}
      {/* <div> */}
      <ul className="flex items-center gap-[90px]">
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
          <i className="" onClick={() => setToogle(!toggle)}>
            <IoSearch />
          </i>
          <div className={`absolute -right-12 p-4 bg-[#F0F0F0] rounded ${toggle ? "top-10 opacity-100" : "top-20 opacity-0"} transform duration-1000`}>
            <input type="search" placeholder="Search..." className="w-[260px] placeholder:text-base p-2.5 h-[45px] rounded-md outline-none " />
          </div>
        </div>
        <div className="w-px bg-[#EFEFEF] h-5"></div>
        <i>
          <CgMenuRight />
        </i>
      </div>
    </nav>
  );
};

export default Navbar;
