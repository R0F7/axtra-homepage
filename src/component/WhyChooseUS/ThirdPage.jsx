import img from "../../assets/counter-3.webp";

const ThirdPage = () => {
  return (
    <section className="bg-[#FFFAF0] min-h-screen w-full flex items-end justify-center">
      <div className="container flex justify-between">
        <div className="grid grid-cols-2 gap-x-24">
          <div>
            <h2 className="text-[100px] text-[#121212] pb-2.5 leading-none">
              25k
            </h2>
            <p className="text-[#555555] text-xl">
              Project <br /> completed
            </p>
          </div>
          <div>
            <h2 className="text-[100px] text-[#121212] pb-2.5 leading-none">
              8k
            </h2>
            <p className="text-[#555555] text-xl">
              Happy <br /> customers
            </p>
          </div>
          <div>
            <h2 className="text-[100px] text-[#121212] pb-2.5 leading-none">
              15
            </h2>
            <p className="text-[#555555] text-xl">
              Years <br /> experiences
            </p>
          </div>
          <div>
            <h2 className="text-[100px] text-[#121212] pb-2.5 leading-none">
              98
            </h2>
            <p className="text-[#555555] text-xl">
              Awards <br /> achievement
            </p>
          </div>
        </div>
        <div>
          <img src={img} alt="Counter Image" />
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
