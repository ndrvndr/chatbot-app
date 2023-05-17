import * as React from "react";
import clsx from "clsx";

import ToggleButton from "../Elements/ToggleButton";
import HeaderApp from "../Elements/HeaderApp";
import Conversation from "../Elements/Conversation";
import InputPrompt from "../Elements/InputPrompt";

const ChatbotApp = () => {
  const [isContentActive, setIsContentActive] = React.useState(false);

  const toggleContent = () => {
    setIsContentActive(!isContentActive);
  };

  const [messages, setMessages] = React.useState(
    JSON.parse(localStorage.getItem("Conversation History")) || []
  );

  const handleSetMessages = (parsingMessages) => {
    setMessages(parsingMessages);
  };

  const [isTyping, setIsTyping] = React.useState(false);
  const [isInputFocused, setIsInputFocused] = React.useState(false);

  const handleInputFocus = (isFocused) => {
    setIsTyping(isFocused);
    setIsInputFocused(isFocused);
  };

  return (
    <>
      <div
        className={clsx(
          "absolute bottom-0 right-0",
          "flex flex-col justify-between",
          "h-full w-full max-w-md",
          "bg-white",
          "ease transition-all duration-[0.5s]",
          "min-[449px]:bottom-[150px] min-[449px]:right-8 min-[449px]:h-[630px] min-[449px]:max-w-[400px] min-[449px]:rounded-xl",
          isContentActive ? "opacity-1" : "opacity-0"
        )}
      >
        <HeaderApp
          toggleContent={toggleContent}
          isTyping={isTyping}
          isInputFocused={isInputFocused}
        />
        <Conversation messages={messages} />
        <InputPrompt
          handleInputFocus={handleInputFocus}
          handleSetMessages={handleSetMessages}
        />
      </div>
      <ToggleButton
        toggleContent={toggleContent}
        isContentActive={isContentActive}
      />
    </>
  );
};
export default ChatbotApp;
