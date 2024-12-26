import icon from "../../assets/second page icon.png";

const SecondPage = () => {
  return (
    <section className="bg-[#F3ECEC] min-h-screen w-full pt-[150px]">
      <div className="container">
        <div className="flex">
          {/* left part */}
          <div className="w-1/2 relative">
            <h4 className="text-lg text-[#121212] leading-tight uppercase font-semibold pb-[140px]">
              Why <br /> Choose Us
            </h4>
            <h1 className="text-6xl text-[#121212] mb-[50px] uppercase font-medium">
              Keword,Research <br /> Strategy, Survey, <br /> & Analytics
            </h1>
            <div className="ml-20">
              <p className="text-lg text-[#121212] w-[65%] leading-snug pb-[100px]">
                Attention, we take out our round glasses and our sweater with
                elbow patches to go back to the origins of the user experience:
                the first mention of the user and its importance was born in the
              </p>
              <div>
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
            <div className="absolute -bottom-4 -left-28">
              <img src={icon} alt="icon" />
            </div>
          </div>

          {/* right part */}
          <div className="w-1/2 ">
            <div className="flex items-center gap-7 w-full pb-[50px] pl-[100px]">
              {/* circle */}
              <span className="w-[190px] h-[190px] rounded-full text-5xl text-[#121212] border-[3px] border-black flex justify-center items-center shrink-0 ">
                60%
              </span>
              {/* content */}
              <div>
                <h4 className="text-[26px] text-[#121212] pb-4 uppercase font-medium">
                  Strategy
                </h4>
                <p className="text-[#121212] w-[80%]">
                  Your marketing strategy optimizing performances doesn’t have
                  to be a guessing game.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-7 w-full pb-[50px]">
              {/* circle */}
              <span className="w-[190px] h-[190px] rounded-full text-5xl text-[#121212] border-[3px] border-black flex justify-center items-center shrink-0 ">
                95%
              </span>
              {/* content */}
              <div>
                <h4 className="text-[26px] text-[#121212] pb-4 uppercase font-medium">
                  Audience
                </h4>
                <p className="text-[#121212] w-[60%]">
                  Your marketing strategy optimizing performances doesn’t have
                  to be a guessing game.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-7 w-full pb-[50px] pl-[100px]">
              {/* circle */}
              <span className="w-[190px] h-[190px] rounded-full text-5xl text-[#121212] border-[3px] border-black flex justify-center items-center shrink-0 ">
                70%
              </span>
              {/* content */}
              <div>
                <h4 className="text-[26px] text-[#121212] pb-4 uppercase font-medium">
                  Keyword
                </h4>
                <p className="text-[#121212] w-[80%]">
                  Your marketing strategy optimizing performances doesn’t have
                  to be a guessing game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
