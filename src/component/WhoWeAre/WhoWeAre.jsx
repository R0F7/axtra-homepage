import { Parallax } from "react-parallax";
import image from "../../assets/who we are image.webp";
import Button from "../Button/Button";

const WhoWeAre = () => {
  return (
    <section className="bg-[#121212] relative overflow-hidden">
      <div className="absolute top-0 right-[750px] bg-[#343434] w-px h-[125px]"></div>
      <div className="container flex gap-28 py-[140px]">
        {/* image */}
        <div>
          <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={image}
            bgImageAlt="image"
            strength={-200}
          >
            <div className="h-[800px] w-[550px]"></div>
          </Parallax>
        </div>

        {/* contain */}
        <div className="flex flex-col justify-center flex-1">
          <h4 className="text-white text-lg uppercase mb-2.5">Who We Are</h4>
          <h1 className="text-white text-6xl uppercase font-medium b-10">
            We are leading <br /> digital marketing <br /> agency.
          </h1>
          <div className="flex flex-col items-end w-full -ml-10">
            <p className="text-[#8D8D8D] w-[365px] mt-28">
              We’re a team of strategic mdigital marketing working globally with
              largest brands, We believe that progress only happens when you
              refused to play things safe. We combine ideas and behaviors, and
              insights with design, technological data to produce brand
              experiences that customers love our services.
            </p>
            <div className="mt-14 flex justify-center w-full pl-14">
              <Button text={"Explore Us"} color={"#8D8D8D"}></Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-[750px] w-px bg-[#343434] h-[590px]"></div>
      {/* circle */}
      <div className="border border-[#343434] rounded-full w-[300px] h-[300px] absolute top-52 right-0 translate-x-1/2">
        <div className=" bg-[#343434] w-[120px] h-px -translate-x-[25px] translate-y-[250px] -rotate-45"></div>
      </div>
    </section>
  );
};

export default WhoWeAre;
