import Button from "../Button/Button";

const OurMarketing = () => {
  return (
    <section className="container pb-[150px]">
      <div className="">
        <div className="translate-x-[515px] bg-[rgba(0,0,0,0.1)] w-px h-[125px]"></div>

        <div className="py-16 pl-[330px]">
          <h4 className="text-[#555555] text-lg uppercase mb-2.5">Services</h4>
          <h1 className="text-[#121212] text-6xl uppercase font-medium mb-8">
            Our marketing <br /> Services
          </h1>
          <div className="pl-[185px]">
            <p className="text-[#555555] w-[395px] border-l border-[rgba(0,0,0,0.1)] pt-[70px] pb-[60px] pl-8">
              Consumers today rely heavily on digital means to research
              products. We research a brand of bldend engaging with it,
              according to the meanwhile, 51% of consumers say they use Google
              to research products before buying.
            </p>
          </div>
        </div>
      </div>

      <div>
        <ul>
          <li className="flex justify-between border-t  py-[52px]">
            <h2 className="text-4xl font-medium text-[#121212] w-[30%] leading-tight uppercase">
              Search Engine <br />
              Optimization
            </h2>
            <div className="flex-1">
              <p className="text-lg text-[#121212] w-[350px] pb-5">
                We help brands stand out through aweful, elegant visual design.
                Our design mainly philosophy.
              </p>
              <ul>
                <li>+ Logo Design</li>
                <li>+ Advertisement</li>
                <li>+ Promotion</li>
              </ul>
            </div>
            <div>
              <Button text={"Details"} color={"#555555"}></Button>
            </div>
          </li>
          <li className="flex justify-between border-t  py-[52px]">
            <h2 className="text-4xl font-medium text-[#121212] w-[30%] leading-tight uppercase">
              Email <br />
              Marketing
            </h2>
            <div className="flex-1">
              <p className="text-lg text-[#121212] w-[350px] pb-5">
                We help brands stand out through aweful, elegant visual design.
                Our design mainly philosophy.
              </p>
              <ul>
                <li>+ Logo Design</li>
                <li>+ Advertisement</li>
                <li>+ Promotion</li>
              </ul>
            </div>
            <div>
              <Button text={"Details"} color={"#555555"}></Button>
            </div>
          </li>
          <li className="flex justify-between border-t  py-[52px]">
            <h2 className="text-4xl font-medium text-[#121212] w-[30%] leading-tight uppercase">
              Content <br />
              Marketing
            </h2>
            <div className="flex-1">
              <p className="text-lg text-[#121212] w-[350px] pb-5">
                We help brands stand out through aweful, elegant visual design.
                Our design mainly philosophy.
              </p>
              <ul>
                <li>+ Logo Design</li>
                <li>+ Advertisement</li>
                <li>+ Promotion</li>
              </ul>
            </div>
            <div>
              <Button text={"Details"} color={"#555555"}></Button>
            </div>
          </li>
          <li className="flex justify-between border-y  py-[52px]">
            <h2 className="text-4xl font-medium text-[#121212] w-[30%] leading-tight uppercase">
              Social <br />
              Marketing
            </h2>
            <div className="flex-1">
              <p className="text-lg text-[#121212] w-[350px] pb-5">
                We help brands stand out through aweful, elegant visual design.
                Our design mainly philosophy.
              </p>
              <ul>
                <li>+ Logo Design</li>
                <li>+ Advertisement</li>
                <li>+ Promotion</li>
              </ul>
            </div>
            <div>
              <Button text={"Details"} color={"#555555"}></Button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OurMarketing;
