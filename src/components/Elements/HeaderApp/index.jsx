import clsx from "clsx";
import PropTypes from "prop-types";

import UversTeam from "./UversTeam";
import OnlineStatus from "./OnlineStatus";
import TypingStatus from "./TypingStatus";
import CloseButton from "./CloseButton";
import { FcCustomerSupport } from "react-icons/fc";

const HeaderApp = ({ toggleContent, isTyping, isInputFocused }) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-around",
        "h-[100px] min-h-[100px] p-5",
        "bg-[#0e74bd]",
        " min-[449px]:justify-start min-[449px]:rounded-t-xl min-[449px]:p-0"
      )}
    >
      <div className='flex min-[449px]:ml-[40px]'>
        <div className='my-auto mr-5 rounded-[100%] border-[none] bg-[#0e74bd] '>
          <FcCustomerSupport fontSize='2.7em' />
        </div>

        <div className='flex w-[132px] flex-col text-white'>
          <UversTeam />
          <OnlineStatus isInputFocused={isInputFocused} />
          <TypingStatus isTyping={isTyping} isInputFocused={isInputFocused} />
        </div>
      </div>
      <CloseButton toggleContent={toggleContent} />
    </div>
  );
};

HeaderApp.propTypes = {
  toggleContent: PropTypes.func.isRequired,
  isTyping: PropTypes.bool.isRequired,
  isInputFocused: PropTypes.bool.isRequired,
};

export default HeaderApp;
