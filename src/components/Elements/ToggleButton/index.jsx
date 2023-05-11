import clsx from "clsx";
import PropTypes from "prop-types";
// import Icon from "../Icon";
import cs_illustration from "../../../assets/cs_illustration.svg";

const ToggleButton = ({ isContentActive, toggleContent }) => {
  return (
    <div
      className={clsx(
        "fixed right-3 bottom-3 ",
        // "rounded-[100%] border-[none] cursor-pointer p-3 ",
        // "bg-[#0e74bd] hover:bg-[#064a7a]",
        "transition-all duration-[1s]",
        isContentActive ? "hidden" : "block",
        "min-[449px]:block"
      )}
      onClick={() => toggleContent()}
    >
      <img src={cs_illustration} alt="Uvers Customer Service Illustration" />
      {/* <Icon /> */}
    </div>
  );
};

ToggleButton.propTypes = {
  isContentActive: PropTypes.bool.isRequired,
  toggleContent: PropTypes.func.isRequired,
};
export default ToggleButton;
