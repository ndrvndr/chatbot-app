import clsx from "clsx";
import PropTypes from "prop-types";
import cs_illustration from "../../../assets/cs_illustration.svg";

const ToggleButton = ({ isContentActive, toggleContent }) => {
  return (
    <div
      className={clsx(
        "absolute bottom-3 right-3",
        "transition-all duration-[1s]",
        isContentActive ? "hidden" : "block",
        "min-[449px]:bottom-0 min-[449px]:right-0 min-[449px]:block"
      )}
      onClick={() => toggleContent()}
    >
      <img src={cs_illustration} alt="Uvers Customer Service Illustration" />
    </div>
  );
};

ToggleButton.propTypes = {
  isContentActive: PropTypes.bool.isRequired,
  toggleContent: PropTypes.func.isRequired,
};
export default ToggleButton;
