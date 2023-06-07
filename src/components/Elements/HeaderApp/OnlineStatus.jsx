import PropTypes from "prop-types";

import { HiStatusOnline } from "react-icons/hi";

const OnlineStatus = ({ isInputFocused }) => {
  return (
    <div
      className={`${isInputFocused ? "hidden" : "flex"} mt-2 flex items-center`}
    >
      <HiStatusOnline color='#4ECE3D' />
      <span className='ml-1 text-sm'>Terhubung</span>
    </div>
  );
};

OnlineStatus.propTypes = {
  isInputFocused: PropTypes.bool.isRequired,
};

export default OnlineStatus;
