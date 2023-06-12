import * as React from "react";
import PropTypes from "prop-types";

import UserDataForm from "./UserDataForm";
import "./style/Conversation.scss";
import sendDataToFirebase from "./FirebaseSender";

const Conversation = ({ messages, handleInputFocus, parsingUserData }) => {
  const messageEndRef = React.useRef(null);

  React.useEffect(() => {
    sendDataToFirebase();
    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleUserData = (data) => {
    parsingUserData(data);
  };

  return (
    <div className='App-main'>
      <UserDataForm
        handleInputFocus={handleInputFocus}
        handleUserData={handleUserData}
      />
      <MessageList
        messages={messages}
        render={(message, index) => {
          if (message.name === "Kamu") {
            return (
              <div
                key={index}
                className='messages__content messages__content--user'
              >
                {message.message}
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className='messages__content messages__content--bot'
              >
                {message.message}
              </div>
            );
          }
        }}
      />
      <div ref={messageEndRef} />
    </div>
  );
};

const MessageList = ({ messages, render }) => {
  return (
    <div>
      {messages.map((message, index) => {
        return render(message, index);
      })}
    </div>
  );
};

Conversation.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleInputFocus: PropTypes.func.isRequired,
  parsingUserData: PropTypes.func.isRequired,
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  render: PropTypes.func.isRequired,
};

export default Conversation;
