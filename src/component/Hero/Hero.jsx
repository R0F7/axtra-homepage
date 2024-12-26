import { IoPlaySharp } from "react-icons/io5";
import star from "../../assets/four point star.png";
import video from "../../assets/hero-3.mp4";
import heroImage from "../../assets/heroImage.jpg";
import arrow from "../../assets/arrow.png";
import logo1 from "../../assets/brandLogo/1.webp";
import logo2 from "../../assets/brandLogo/2.webp";
import logo3 from "../../assets/brandLogo/3.webp";
import logo4 from "../../assets/brandLogo/4.webp";
import logo5 from "../../assets/brandLogo/5.webp";
import logo6 from "../../assets/brandLogo/6.webp";
// import { BsArrowDown } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="mt-20 relative">
      <div className="absolute top-14 right-8">
        <img src={star} alt="Four Point Star" />
      </div>

      <div>
        {/* video bg */}
        <div className="absolute inset-0 -z-10 -mt-[85px] hidden lg:block">
          <video
            className="w-ful min-h-screen object-cover"
            autoPlay
            muted
            loop
          >
            <source src={video} type="video/mp4"></source>
          </video>
        </div>
        {/* content */}
        <div className="pt-16 lg:pt-28 z-10 bg-white lg:min-h-screen">
          <div className="container">
            <div className="flex items-center gap-10 mb-7 md:md-3 lg:mb-0">
              <h3 className="font-semibold text-2xl">DIGITAL</h3>
              <div className="h-px w-24 bg-black"></div>
            </div>
            <div>
              <div className="flex justify-between">
                <h1 className="text-[90px] md:text-[125px] lg:text-[300px] text-[#121212] font-semibold leading-none -mt-6">
                  MARK
                </h1>
                <div className="hidden lg:flex items-center gap-4">
                  <div className="w-32 h-32 z-0 border rounded-full flex items-center justify-center">
                    <i className="p-2 border rounded-full bg-[#121212] text-white">
                      <IoPlaySharp />
                    </i>
                  </div>
                  <div className="text-[#122529]">
                    <h5 className="font-medium">watch</h5>
                    <h4 className="font-medium text-lg">VIDEO INTRO</h4>
                  </div>
                </div>
              </div>
              <div className="flex flex-col-reverse md:flex-row items-center justify-between relative z-10 mb-60 lg:mb-0 ">
                <p className="text-[#6A6A6A] w-[320px] text-lg leading-snug -ml-10 md:-ml-0 mt-8 md:mt-0">
                  Static and dynamic secure code review can prevent a day before
                  your product is even released.We can integrate with your dev
                  environment
                </p>
                <div className="">
                  <h1 className="text-[90px] md:text-[125px] lg:text-[300px] text-[#121212] font-semibold leading-10 md:leading-none md:-mt-12 md:mr-6 ml-20 md:ml-0">
                    ETING
                  </h1>
                  <div className="absolute -bottom-[275px] lg:-bottom-56 right-0 md:-right-[75px] lg:-right-[315px] h-[222px] w-full md:w-[720px] lg:h-[350px] lg:w-[1200px] -z-10 ">
                    <img
                      className="h-full w-full object-cover"
                      src={heroImage}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="text-3xl border border-[rgba(0,0,0,0.3)] text-[rgba(0,0,0,0.7)] h-[90px] w-[40px] rounded-full flex items-center justify-center">
                <i><BsArrowDown /></i>
            </div> */}
            <div className="w-[160px] -ml-14 hidden lg:block">
              <img className="w-full h-full" src={arrow} alt="arrow icon" />
            </div>
          </div>
        </div>

        {/* circle */}
        <div className="border border-[rgba(0,0,0,0.1)] rounded-full w-[450px] h-[450px] absolute top-10 lg:top-44 lg:-left-0 -translate-x-1/2">
          <div className=" bg-[rgba(0,0,0,0.1)] w-40 h-px translate-x-[300px] translate-y-[380px] rotate-45"></div>
        </div>
      </div>

      {/* brand logos  */}
      <div className="py-[100px] lg:py-[140px]">
        <div className="container px-3">
          <h4 className="text-[#121212] text-lg text-center uppercase mb-16">
            We worked with global largest brands
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 gap-y-12 md:gap-y-16 lg:gap-y-0 place-items-center">
            <img className="col-span-1" src={logo1} alt="Brand Logo" />
            <img className="col-span-1" src={logo2} alt="Brand Logo" />
            <img className="col-span-1" src={logo3} alt="Brand Logo" />
            <img className="col-span-1" src={logo4} alt="Brand Logo" />
            <img className="col-span-1" src={logo5} alt="Brand Logo" />
            <img className="col-span-1" src={logo6} alt="Brand Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
