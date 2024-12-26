import { HiArrowRight } from "react-icons/hi";

const FourthPage = () => {
  return (
    <section className="bg-[#E1E4CD] min-h-screen w-full flex flex-col justify-center pt-20">
      <p className="text-[#121212] text-[28px] pb-[25px] text-center font-light">
        Have you project in mind?
      </p>
      <h2 className="text-[100px] text-[#121212] pb-[60px] leading-none text-center font-light">
        Let’s make something <br /> great together!
      </h2>
      <div className="flex justify-center ">
        <button className="flex items-center justify-center gap-3 text-2xl text-[#555555] border border-black h-72 w-72 rounded-full">
          Contact <br />
          With Us
          <i>
            <HiArrowRight />
          </i>
        </button>
      </div>
    </section>
  );
};

export default FourthPage;
