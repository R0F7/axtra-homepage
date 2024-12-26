import { HiArrowRight } from "react-icons/hi";

const FourthPage = () => {
  return (
    <section className="bg-[#E1E4CD] lg:min-h-screen w-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-0 py-20 lg:py-0">

      <p className="text-[#121212] text-xl md:text-2xl lg:text-[28px] pb-4 md:pb-6 text-center font-light">
        Have a project in mind?
      </p>
      <h2 className="text-4xl md:text-6xl lg:text-[100px] text-[#121212] pb-6 md:pb-10 lg:pb-[60px] leading-tight md:leading-none text-center font-light">
        Let’s make something <br /> great together!
      </h2>

      <div className="flex justify-center mt-4 md:mt-8">
        <button className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-lg md:text-2xl text-[#555555] border border-black h-40 w-40 md:h-60 md:w-60 lg:h-72 lg:w-72 rounded-full hover:bg-black hover:text-white transition duration-300">
          <span className="text-center md:text-left">Contact <br /> With Us</span>
          <i className="text-2xl md:text-3xl">
            <HiArrowRight />
          </i>
        </button>
      </div>
    </section>
  );
};

export default FourthPage;
