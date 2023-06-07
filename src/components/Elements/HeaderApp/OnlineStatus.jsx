import PropTypes from "prop-types";
import * as React from "react";

import { HiStatusOnline, HiStatusOffline } from "react-icons/hi";

const OnlineStatus = ({ isInputFocused }) => {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);
  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return (
    <div
      className={`${isInputFocused ? "hidden" : "flex"} mt-2 flex items-center`}
    >
      {isOnline ? (
        <HiStatusOnline color='#4ECE3D' />
      ) : (
        <HiStatusOffline color='#fff' />
      )}
      <span className='ml-1 text-sm'>
        {isOnline ? "Terhubung" : "Tidak Terhubung"}
      </span>
    </div>
  );
};

OnlineStatus.propTypes = {
  isInputFocused: PropTypes.bool.isRequired,
};

export default OnlineStatus;
