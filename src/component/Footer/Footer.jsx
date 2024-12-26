import logo_white from "../../assets/site-logo-white-2.webp";

const Footer = () => {
  return (
    <section className="bg-[#121212] ">
      <div className="grid grid-cols-10 px-4 lg:px-[50px] gap-10 lg:gap-0">
        <div className="col-span-10 md:col-span-4 lg:col-span-3 pt-16 lg:pt-[120px]">
          <div>
            <img src={logo_white} alt="Footer Logo" />
          </div>
          <p className="text-[#999999] w-[300px] lg:w-[320px] mt-6">
            When do they work well, and when do they on us and finally, when do
            we actually need how can we avoid them.
          </p>
        </div>
        <ul className="text-white border border-[#343434] col-span-10 md:col-span-2 lg:col-span-1 text-center ">
          <li className="border-b border-[#343434] py-[38px] hover:bg-white hover:text-[#121212] transition duration-300 uppercase">
            Facebook
          </li>
          <li className="border-b border-[#343434] py-[38px] hover:bg-white hover:text-[#121212] transition duration-300 uppercase">
            Twitter
          </li>
          <li className="border-b border-[#343434] py-[38px] hover:bg-white hover:text-[#121212] transition duration-300 uppercase">
            Linkedin
          </li>
          <li className="py-[38px] hover:bg-white hover:text-[#121212] transition duration-300 uppercase">
            Instagram
          </li>
        </ul>
        <div className="col-span-10 md:col-span-4 lg:col-span-6 pt-6 lg:pt-[80px] text-center">
          <h1 className="text-[48px] lg:text-[140px] text-white font-medium uppercase gradient-text">
            Let’s talk
          </h1>
        </div>
      </div>
      <div className="border-t border-[#343434]">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-4 lg:gap-0 md:p-6 lg:p-[50px] text-white font-medium">
          <div>
            <h4 className="flex lg:flex-col gap-2 lg:gap-0">
              &copy; 2022 - 2025 | Alrights reserved <br />
              <span>by R0F7</span>
            </h4>
          </div>
          <ul className="flex gap-4 md:gap-10 lg:gap-20 uppercase">
            <li>About Us</li>
            <li>Contact</li>
            <li>Career</li>
            <li>FAQS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
