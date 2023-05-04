import * as React from "react";

import ToggleButton from "../Elements/ToggleButton";

const ChatbotApp = () => {
  const [isContentActive, setIsContentActive] = React.useState(false);

  const toggleContent = () => {
    setIsContentActive(!isContentActive);
  };
  return (
    <>
      <ToggleButton
        toggleContent={toggleContent}
        isContentActive={isContentActive}
      />
    </>
  );
};
export default ChatbotApp;
