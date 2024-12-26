import img from "../../assets/counter-3.webp";

const ThirdPage = () => {
  return (
    <section className="bg-[#FFFAF0] lg:min-h-screen w-full flex items-end justify-center">
      <div className="container flex flex-col md:flex-row gap-10 lg:gap-0 justify-between !py-10 md:!py-[90px] lg:!py-0">
        <div className="grid grid-cols-2 gap-x-10 lg:gap-x-24 place-items-center">
          <div>
            <h2 className="text-5xl lg:text-[100px] text-[#121212] pb-2.5 leading-none">
              25k
            </h2>
            <p className="text-[#555555] text-xl">
              Project <br /> completed
            </p>
          </div>
          <div>
            <h2 className="text-5xl lg:text-[100px] text-[#121212] pb-2.5 leading-none">
              8k
            </h2>
            <p className="text-[#555555] text-xl">
              Happy <br /> customers
            </p>
          </div>
          <div>
            <h2 className="text-5xl lg:text-[100px] text-[#121212] pb-2.5 leading-none">
              15
            </h2>
            <p className="text-[#555555] text-xl">
              Years <br /> experiences
            </p>
          </div>
          <div>
            <h2 className="text-5xl lg:text-[100px] text-[#121212] pb-2.5 leading-none">
              98
            </h2>
            <p className="text-[#555555] text-xl">
              Awards <br /> achievement
            </p>
          </div>
        </div>
        <div>
          <img className="h-[396px] w-[370px] lg:h-[717px] lg:w-[610px]" src={img} alt="Counter Image" />
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
