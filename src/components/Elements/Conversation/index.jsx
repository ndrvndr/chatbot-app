import * as React from "react";
import PropTypes from "prop-types";

// import UserDataForm from "./conversation-components/UserDataForm";
// import sendDataToFirebase from "./FirebaseSender";

const Conversation = ({ messages }) => {
  const messageEndRef = React.useRef(null);

  React.useEffect(() => {
    // sendDataToFirebase();
    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="App-main">
      {/* <UserDataForm /> */}
      <MessageList
        messages={messages}
        render={(message, index) => {
          if (message.name === "Kamu") {
            return (
              <div
                key={index}
                className="messages__content messages__content--user"
              >
                {message.message}
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="messages__content messages__content--bot"
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
  message: PropTypes.object,
};

export default Conversation;
