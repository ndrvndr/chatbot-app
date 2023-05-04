import clsx from "clsx";
import PropTypes from "prop-types";

import Icon from "../Icon";
import UversTeam from "./UversTeam";
import OnlineStatus from "./OnlineStatus";
// import TypingStatus from "./TypingStatus";
import CloseButton from "./CloseButton";

const HeaderApp = ({ toggleContent }) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-around",
        "h-[100px] min-h-[100px]",
        "bg-[#0e74bd]",
        " min-[449px]:rounded-t-xl min-[449px]:justify-start"
      )}
    >
      <div className="flex min-[449px]:ml-[40px]">
        <div className="mr-5 my-auto rounded-[100%] border-[none] bg-[#0e74bd] ">
          <Icon />
        </div>

        <div className="flex flex-col text-white">
          <UversTeam />
          <OnlineStatus />
          {/* <TypingStatus /> */}
        </div>
      </div>
      <CloseButton toggleContent={toggleContent} />
    </div>
  );
};

HeaderApp.propTypes = {
  toggleContent: PropTypes.func.isRequired,
};

export default HeaderApp;
