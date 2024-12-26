import Button from "../Button/Button";
import HomeCommon from "../HomeCommon/HomeCommon";

const OurMarketing = () => {
  const marketingContent = {
    sub_heading: "Services",
    title: "Our marketing <br/> Services.",
    description:
      "Consumers today rely heavily on digital means to research products. We research a brand of blending engaging with it, according to the meanwhile, 51% of consumers say they use Google to research products before buying.",
  };

  return (
    <section className="container md:pb-20 lg:!pb-[150px] ">
      <HomeCommon {...marketingContent}></HomeCommon>

      {/* services */}
      <div className="">
        <ul>
          <li className="flex flex-col md:flex-row justify-between border-t py-10 md:py-[52px] md:mt-20 lg:mt-0">
            <h2 className="text-2xl lg:text-4xl font-medium text-[#121212] md:w-[30%] leading-tight uppercase">
              Search Engine <br />
              Optimization
            </h2>
            <div className="flex-1 pt-4 pb-6 md:pt-0 md:pb-0">
              <p className="text-lg text-[#121212] md:w-[300px] lg:w-[350px] pb-5">
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
          <li className="flex flex-col md:flex-row justify-between border-t py-10 md:py-[50px] lg:py-[52px]">
            <h2 className="text-2xl lg:text-4xl font-medium text-[#121212] w-[30%] leading-tight uppercase">
              Email <br />
              Marketing
            </h2>
            <div className="flex-1 pt-4 pb-6 md:pt-0 md:pb-0">
              <p className="text-lg text-[#121212] md:w-[300px] lg:w-[350px] pb-5">
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
          <li className="flex flex-col md:flex-row justify-between border-t py-10 md:py-[50px] lg:py-[52px]">
            <h2 className="text-2xl lg:text-4xl font-medium text-[#121212] w-[30%] leading-tight uppercase">
              Content <br />
              Marketing
            </h2>
            <div className="flex-1 pt-4 pb-6 md:pt-0 md:pb-0">
              <p className="text-lg text-[#121212] md:w-[300px] lg:w-[350px] pb-5">
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
          <li className="flex flex-col md:flex-row justify-between border-y py-10 md:py-[50px] lg:py-[52px]">
            <h2 className="text-2xl lg:text-4xl font-medium text-[#121212] w-[30%] leading-tight uppercase">
              Social <br />
              Marketing
            </h2>
            <div className="flex-1 pt-4 pb-6 md:pt-0 md:pb-0">
              <p className="text-lg text-[#121212] md:w-[300px] lg:w-[350px] pb-5">
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
