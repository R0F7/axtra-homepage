import PropTypes from "prop-types";

const HomeCommon = ({ sub_heading, title, description }) => {
  return (
    <>
      <div className="">
        <div className="translate-x-[515px] bg-[rgba(0,0,0,0.1)] w-px h-[125px]"></div>

        <div className="py-16 pl-[330px]">
          <h4 className="text-[#555555] text-lg uppercase mb-2.5">
            {sub_heading}
          </h4>
          <h1
            className="text-[#121212] text-6xl uppercase font-medium mb-8"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          <div className="pl-[185px]">
            <p className="text-[#555555] w-[455px] text-lg border-l border-[rgba(0,0,0,0.1)] pt-[70px] pb-[60px] pl-8">
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
