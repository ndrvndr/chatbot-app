import clsx from "clsx";
import PropTypes from "prop-types";
import ic_cs from "../../../assets/ic_cs.svg";

const ToggleButton = ({ isContentActive, toggleContent }) => {
  return (
    <div
      className={clsx(
        "absolute bottom-3 right-3",
        "cursor-pointer rounded-[100%] border-[none] p-3",
        "bg-[#0e74bd] hover:bg-[#064a7a]",
        "transition-all duration-[1s]",
        isContentActive ? "hidden" : "block",
        "min-[449px]:bottom-0 min-[449px]:right-0 min-[449px]:block"
      )}
      onClick={() => toggleContent()}
    >
      <img src={ic_cs} alt='Icon Customer Service' className='h-9 w-9' />
    </div>
  );
};

ToggleButton.propTypes = {
  isContentActive: PropTypes.bool.isRequired,
  toggleContent: PropTypes.func.isRequired,
};
export default ToggleButton;
