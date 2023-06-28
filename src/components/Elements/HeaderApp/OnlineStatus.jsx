import PropTypes from "prop-types";
import * as React from "react";

import { HiStatusOnline } from "react-icons/hi";
import { TbCloudOff } from "react-icons/tb";

const OnlineStatus = ({ isInputFocused }) => {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);
  // const [isEndpointAvailable, setIsEndpointAvailable] = React.useState(false);

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

  // React.useEffect(() => {
  //   const checkEndpointAvailability = async () => {
  //     try {
  //       const response = await fetch(import.meta.env.VITE_ENDPOINT, {
  //         method: "POST",
  //         body: JSON.stringify({
  //           message: "Hello World",
  //         }),
  //         mode: "cors",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       setIsEndpointAvailable(response.ok);
  //     } catch (error) {
  //       setIsEndpointAvailable(false);
  //     }
  //   };

  //   checkEndpointAvailability();

  //   const interval = setInterval(() => {
  //     checkEndpointAvailability();
  //   }, 10000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div
      className={`${isInputFocused ? "hidden" : "flex"} mt-2 flex items-center`}
    >
      {isOnline ? (
        <HiStatusOnline color='#4ECE3D' />
      ) : (
        <TbCloudOff color='#fff' />
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
