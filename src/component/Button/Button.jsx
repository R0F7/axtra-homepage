import { MdOutlineArrowOutward } from "react-icons/md";
import PropTypes from "prop-types";

const Button = ({ text, color }) => {
    console.log(color); //#FFFFFF
  return (
    <>
      <button
        className={`flex items-center justify-center gap-1  w-40 h-40 rounded-full`}
        style={{
            border: `1px solid ${color}`,
            color: color,
          }}
      >
        {text}
        <i>
          <MdOutlineArrowOutward />
        </i>
      </button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.any,
};

export default Button;
