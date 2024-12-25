import { IoPlaySharp } from "react-icons/io5";
import star from "../../assets/four point star.png";
import video from "../../assets/hero-3.mp4";
import heroImage from "../../assets/heroImage.jpg";
import arrow from "../../assets/arrow.png";
// import { BsArrowDown } from "react-icons/bs";

const Hero = () => {
  return (
    <main className="mt-20 relative">
      <div className="absolute top-14 right-8">
        <img src={star} alt="Four Point Star" />
      </div>

      <section className="">
        {/* video bg */}
        <div className="absolute inset-0 -z-10 -mt-20">
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
        <div className="pt-28 z-10 bg-white min-h-screen">
          <div className="max-w-[1296px] mx-auto">
            <div className="flex items-center gap-10">
              <h3 className="font-semibold text-2xl">DIGITAL</h3>
              <div className="h-px w-24 bg-black"></div>
            </div>
            <div>
              <div className="flex justify-between">
                <h1 className="text-[300px] text-[#121212] font-semibold leading-none -mt-6">
                  MARK
                </h1>
                <div className="flex items-center gap-4">
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
              <div className="flex items-center justify-between relative z-10">
                <p className="text-[#6A6A6A] w-[320px] text-lg leading-snug">
                  Static and dynamic secure code review can prevent a day before
                  your product is even released.We can integrate with your dev
                  environment
                </p>
                <h1 className="text-[300px] text-[#121212] font-semibold leading-none -mt-12 mr-6">
                  ETING
                </h1>
                <div className="absolute -bottom-56 -right-[303px] h-[350px] w-[1200px] -z-10">
                  <img
                    className="h-full w-full object-cover"
                    src={heroImage}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* <div className="text-3xl border border-[rgba(0,0,0,0.3)] text-[rgba(0,0,0,0.7)] h-[90px] w-[40px] rounded-full flex items-center justify-center">
                <i><BsArrowDown /></i>
            </div> */}
            <div className="w-[160px] -ml-14">
              <img className="w-full h-full" src={arrow} alt="" />
            </div>
          </div>
        </div>

        {/* circle */}
        <div className="border border-[#F0F0F0] rounded-full w-[450px] h-[450px] absolute top-44 -left-0 -translate-x-1/2">
          <div className=" bg-[#F0F0F0] w-40 h-px translate-x-[300px] translate-y-[380px] rotate-45"></div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
