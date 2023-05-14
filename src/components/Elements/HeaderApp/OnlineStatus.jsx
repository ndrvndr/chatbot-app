import PropTypes from "prop-types";

import OnlineStatusIcon from "../../../assets/ic_online.svg";

const OnlineStatus = ({ isInputFocused }) => {
  return (
    <div className={`${isInputFocused ? "hidden" : "flex"} mt-2`}>
      <img src={OnlineStatusIcon} alt="Online Status Icon" />
      <span className="ml-1 text-sm">Terhubung</span>
    </div>
  );
};

OnlineStatus.propTypes = {
  isInputFocused: PropTypes.bool.isRequired,
};

export default OnlineStatus;
