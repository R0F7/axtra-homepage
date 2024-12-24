import { FaPlus, FaXmark } from "react-icons/fa6";
import logo_white from "../../assets/site-logo-white-2.webp";
import bigBall from "../../assets/11.webp";
import smallBall from "../../assets/12.webp";
import { IoSearch } from "react-icons/io5";

const RoutePage = ({ setMenuOpen }) => {
  return (
    <main className="grid grid-cols-12">
      {/* Follow Us section */}
      <section className="col-span-2">
        <div className="border-b border-[#2A2A2A] pb-14 pl-[50px] pt-14">
          <img src={logo_white} alt="" />
        </div>

        <div className="pt-56 pl-[50px] pb-16">
          <h4 className="text-2xl pb-5">Follow Us</h4>
          <ul className="text-lg space-y-0.5">
            <li className="hover:text-[#8E8E8E]">Dribbble</li>
            <li className="hover:text-[#8E8E8E] hover:duration-300">Behance</li>
            <li className="hover:text-[#8E8E8E] hover:duration-300">
              Instagram
            </li>
            <li className="hover:text-[#8E8E8E] hover:duration-300">
              Facebook
            </li>
            <li className="hover:text-[#8E8E8E] hover:duration-300">Twitter</li>
            <li className="hover:text-[#8E8E8E] hover:duration-300">YouTube</li>
          </ul>
        </div>

        <div className="border-t border-[#2A2A2A] pt-[110px] pl-[50px] ">
          <ul className="text-lg">
            <li className="hover:text-[#8E8E8E] hover:duration-300">About</li>
            <li className="hover:text-[#8E8E8E] hover:duration-300">Contact</li>
            <li className="hover:text-[#8E8E8E] hover:duration-300">Career</li>
            <li className="hover:text-[#8E8E8E] hover:duration-300">Blog</li>
          </ul>
        </div>
      </section>

      {/* Route section */}
      <section className="col-span-7 pt-[145px] border-x border-[#2A2A2A]">
        <ul>
          <li className="flex justify-between items-center text-[80px] border-t border-[#2A2A2A] pl-28 y-7 h-[120px]">
            <span>HOME</span>{" "}
            <i className="text-2xl bg-[#2A2A2A] h-full flex items-center px-8">
              <FaPlus />
            </i>
          </li>
          <li className="flex justify-between items-center text-[80px] border-t border-[#2A2A2A] pl-28 y-7 h-[120px]">
            <span>ABOUT</span>{" "}
          </li>
          <li className="flex justify-between items-center text-[80px] border-t border-[#2A2A2A] pl-28 y-7 h-[120px]">
            <span>SERVICE</span>{" "}
            <i className="text-2xl bg-[#2A2A2A] h-full flex items-center px-8">
              <FaPlus />
            </i>
          </li>
          <li className="flex justify-between items-center text-[80px] border-t border-[#2A2A2A] pl-28 y-7 h-[120px]">
            <span>PAGES</span>{" "}
            <i className="text-2xl bg-[#2A2A2A] h-full flex items-center px-8">
              <FaPlus />
            </i>
          </li>
          <li className="flex justify-between items-center text-[80px] border-t border-[#2A2A2A] pl-28 y-7 h-[120px]">
            <span>BLOG</span>{" "}
            <i className="text-2xl bg-[#2A2A2A] h-full flex items-center px-8">
              <FaPlus />
            </i>
          </li>
          <li className="flex justify-between items-center text-[80px] border-t border-[#2A2A2A] pl-28 y-7 h-[120px]">
            <span>CONTACT</span>{" "}
          </li>
        </ul>
      </section>

      {/* Get in touch section */}
      <section className="pr-[50px] col-span-3 bg-[#1D1D1D] px-[50px] relative">
        <div className="flex justify-end pt-8">
          <i
            onClick={() => setMenuOpen(false)}
            className="bg-[#232323] rounded-full p-4"
          >
            <FaXmark />
          </i>
        </div>
        <div className="mt-24">
          <div className="relative">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search keyword"
              className="w-full bg-transparent border border-[#3C3C3C] p-5 rounded-full placeholder:text-sm text-[#4A4A4A] placeholder:text-[#4A4A4A] text-base outline-none"
            />
            <i className="absolute top-6 right-6 text-lg">
              <IoSearch />
            </i>
          </div>

          <div className="mt-36">
            <h4 className="text-2xl pb-5">Get in touch</h4>
            <ul className="text-lg space-y-1.5">
              <li className="hover:text-[#8E8E8E] hover:duration-300">
                <a href="tel:+02094980547">+(02) - 094 980 547</a>
              </li>
              <li className="hover:text-[#8E8E8E] hover:duration-300">
                <a href="mailto:info@extradesign.com">info@extradesign.com</a>
              </li>
              <li>
                <p>
                  230 Norman Street New York, <br />
                  QC (USA) H8R 1A1
                </p>
              </li>
            </ul>
          </div>

          <div className="absolute bottom-0 left-32">
            <img src={smallBall} className="ml-36" alt="" />
            <img src={bigBall} className="ml0" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoutePage;
