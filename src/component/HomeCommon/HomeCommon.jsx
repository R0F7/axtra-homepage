import PropTypes from "prop-types";

const HomeCommon = ({ sub_heading, title, description }) => {
  return (
    <>
      <div className="">
        <div className=" md:translate-x-[210px] lg:translate-x-[515px] bg-[rgba(0,0,0,0.1)] w-px md:h-[80px] lg:h-[125px] mt-[60px] md:mt-0"></div>

        <div className=" lg:py-16 md:pl-[100px] lg:pl-[330px]">
          <h4 className="text-[#555555] text-lg uppercase mb-2.5">
            {sub_heading}
          </h4>
          <h1
            className="text-[#121212] text-[32px] md:text-4xl lg:text-6xl uppercase font-medium lg:mb-8 leading-none"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          <div className="md:pl-[110px] lg:pl-[185px]">
            <p className="text-[#555555] w-full md:w-[455px] text-lg md:border-l border-[rgba(0,0,0,0.1)] pt-10 md:pt-[70px] pb-10 md:pb-[60px] md:pl-2 lg:pl-8">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

HomeCommon.propTypes = {
  sub_heading: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default HomeCommon;
