import { MdOutlineArrowOutward } from "react-icons/md";

const Button = () => {
  return (
    <>
      <button className="flex items-center justify-center gap-1 border border-[#343434] w-40 h-40 rounded-full text-[#8D8D8D]">
        Explore Us
        <i>
          <MdOutlineArrowOutward />
        </i>
      </button>
    </>
  );
};

export default Button;
