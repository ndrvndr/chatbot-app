import PropTypes from "prop-types";

import CloseIcon from "../../../assets/ic_close.svg";

const CloseButton = ({ toggleContent }) => {
  return (
    <div
      className="ml-[70px] cursor-pointer min-[449px]:hidden"
      onClick={() => toggleContent()}
    >
      <img src={CloseIcon} alt="Close Icon" />
    </div>
  );
};

CloseButton.propTypes = {
  toggleContent: PropTypes.func.isRequired,
};

export default CloseButton;
