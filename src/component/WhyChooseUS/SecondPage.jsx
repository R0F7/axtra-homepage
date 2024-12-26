import icon from "../../assets/second page icon.png";

const SecondPage = () => {
  return (
    <section className="bg-[#F3ECEC] min-h-screen w-full pt-[100px] lg:pt-[150px]">
      <div className="container px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Section */}
          <div className="lg:w-1/2 w-full relative">
            <h4 className="text-lg text-[#121212] leading-tight uppercase font-semibold pb-8 lg:pb-[140px]">
              Why <br /> Choose Us
            </h4>
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-[#121212] mb-6 lg:mb-[50px] uppercase font-medium">
              Keword, Research <br /> Strategy, Survey, <br /> & Analytics
            </h1>
            <div className="lg:ml-20">
              <p className="text-base md:text-lg text-[#121212] w-full md:w-[75%] lg:w-[65%] leading-snug pb-8 lg:pb-[100px]">
                Attention, we take out our round glasses and our sweater with
                elbow patches to go back to the origins of the user experience:
                the first mention of the user and its importance was born in the
              </p>
              <div className="flex flex-wrap gap-2">
                <button className="text-[15px] py-0.5 px-4 font-semibold border border-black rounded-full hover:bg-[#121212] hover:text-white transition duration-300">
                  Google
                </button>
                <button className="text-[15px] py-0.5 px-4 font-semibold border border-black rounded-full hover:bg-[#121212] hover:text-white transition duration-300">
                  Pinterest
                </button>
                <button className="text-[15px] py-0.5 px-4 font-semibold border border-black rounded-full hover:bg-[#121212] hover:text-white transition duration-300">
                  Instagram
                </button>
              </div>
            </div>
            <div className="absolute bottom-10 -left-28 w-32 hidden lg:block">
              <img src={icon} alt="icon" />
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 w-full">
            <div className="flex flex-col gap-8">

              <div className="flex items-center gap-4 md:gap-7 w-full pb-8 md:pb-[50px] lg:pl-[100px]">
                <span className="w-20 h-20 md:w-[150px] md:h-[150px] lg:w-[190px] lg:h-[190px] rounded-full text-2xl md:text-4xl lg:text-5xl text-[#121212] border-[2px] md:border-[3px] border-black flex justify-center items-center shrink-0">
                  60%
                </span>
                <div>
                  <h4 className="text-lg md:text-[22px] lg:text-[26px] text-[#121212] pb-2 md:pb-4 uppercase font-medium">
                    Strategy
                  </h4>
                  <p className="text-[#121212] text-sm md:text-base w-full md:w-[80%]">
                    Your marketing strategy optimizing performances doesn’t have
                    to be a guessing game.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-7 w-full pb-8 md:pb-[50px]">
                <span className="w-20 h-20 md:w-[150px] md:h-[150px] lg:w-[190px] lg:h-[190px] rounded-full text-2xl md:text-4xl lg:text-5xl text-[#121212] border-[2px] md:border-[3px] border-black flex justify-center items-center shrink-0">
                  95%
                </span>
                <div>
                  <h4 className="text-lg md:text-[22px] lg:text-[26px] text-[#121212] pb-2 md:pb-4 uppercase font-medium">
                    Audience
                  </h4>
                  <p className="text-[#121212] text-sm md:text-base w-full md:w-[60%]">
                    Your marketing strategy optimizing performances doesn’t have
                    to be a guessing game.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-7 w-full pb-8 md:pb-[50px] lg:pl-[100px]">
                <span className="w-20 h-20 md:w-[150px] md:h-[150px] lg:w-[190px] lg:h-[190px] rounded-full text-2xl md:text-4xl lg:text-5xl text-[#121212] border-[2px] md:border-[3px] border-black flex justify-center items-center shrink-0">
                  70%
                </span>
                <div>
                  <h4 className="text-lg md:text-[22px] lg:text-[26px] text-[#121212] pb-2 md:pb-4 uppercase font-medium">
                    Keyword
                  </h4>
                  <p className="text-[#121212] text-sm md:text-base w-full md:w-[80%]">
                    Your marketing strategy optimizing performances doesn’t have
                    to be a guessing game.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
