import clsx from "clsx";
import PropTypes from "prop-types";
import { TbMessage, TbMessageOff } from "react-icons/tb";

const ToggleButton = ({ isContentActive, toggleContent }) => {
  return (
    <div
      className={clsx(
        "absolute bottom-3 right-3",
        "w-fit cursor-pointer rounded-[100%] border-[none] p-3.5",
        "bg-[#0e74bd] hover:bg-[#064a7a]",
        "transition-all duration-[1s]",
        isContentActive ? "hidden" : "block",
        "min-[449px]:static min-[449px]:block min-[449px]:self-end"
      )}
      onClick={() => toggleContent()}
    >
      {isContentActive ? (
        <TbMessageOff color='white' fontSize='2em' />
      ) : (
        <TbMessage color='white' fontSize='2em' />
      )}
    </div>
  );
};

ToggleButton.propTypes = {
  isContentActive: PropTypes.bool.isRequired,
  toggleContent: PropTypes.func.isRequired,
};
export default ToggleButton;
