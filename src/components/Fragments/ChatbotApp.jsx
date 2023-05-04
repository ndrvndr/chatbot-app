import * as React from "react";
import clsx from "clsx";

import ToggleButton from "../Elements/ToggleButton";
import HeaderApp from "../Elements/HeaderApp";

const ChatbotApp = () => {
  const [isContentActive, setIsContentActive] = React.useState(false);

  const toggleContent = () => {
    setIsContentActive(!isContentActive);
  };
  return (
    <>
      <div
        className={clsx(
          "fixed right-0 bottom-0",
          "flex flex-col justify-between",
          "w-full h-full max-w-md max-h-[950px]",
          "bg-white",
          "transition-all ease duration-[0.5s]",
          "min-[449px]:max-w-[400px] min-[449px]:h-[630px] min-[449px]:right-7 min-[449px]:bottom-[100px] min-[449px]:rounded-xl",
          isContentActive ? "opacity-1" : "opacity-0"
        )}
      >
        <HeaderApp toggleContent={toggleContent} />
      </div>
      <ToggleButton
        toggleContent={toggleContent}
        isContentActive={isContentActive}
      />
    </>
  );
};
export default ChatbotApp;
