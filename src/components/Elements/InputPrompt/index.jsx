import * as React from "react";
import PropTypes from "prop-types";

import SendButton from "./SendButton";
import InputPrompt from "./InputPrompt";
import MyModal from "../Dialog";
import { HiOutlineExclamation } from "react-icons/hi";

const Input = ({ handleInputFocus, handleSetMessages, userDataStore }) => {
  const [messages, setMessages] = React.useState(
    JSON.parse(localStorage.getItem("Conversation History")) || []
  );

  const [userInput, setUserInput] = React.useState("");
  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const userData =
    userDataStore || JSON.parse(localStorage.getItem("User Data Form"));

  let [isOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleInputValidation = () => {
    if (userData === null) {
      openModal();
      return false;
    }
    return true;
  };

  const handleInputClick = () => {
    handleInputValidation();
  };

  const handleSubmit = () => {
    if (handleInputValidation() && userInput.trim() !== "") {
      const msg1 = { name: "Kamu", message: userInput };

      fetch(import.meta.env.VITE_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({ message: userInput }),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.json())
        .then((r) => {
          const msg2 = { name: "Uvers", message: r.answer };
          const parsingMessages = [...messages, msg1, msg2];
          setMessages(parsingMessages);
          handleSetMessages(parsingMessages);
          localStorage.setItem(
            "Conversation History",
            JSON.stringify(parsingMessages)
          );
          setUserInput("");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <>
      <div className='flex h-[100px] min-h-[100px] flex-col items-center'>
        <hr className='w-[350px] border border-solid border-[#e0e0e0]' />
        <div className='my-auto flex w-full justify-around'>
          <InputPrompt
            handleInputClick={handleInputClick}
            handleInputFocus={handleInputFocus}
            userInput={userInput}
            handleChange={handleChange}
            handleKeyPress={handleKeyPress}
            userData={userData}
          />
          <SendButton handleSubmit={handleSubmit} />
        </div>
      </div>
      <MyModal
        isOpen={isOpen}
        closeModal={closeModal}
        dialogTitle='Ooops'
        dialogDesc='Mohon berikan nama, email, dan nomor telepon Anda'
        dialogButton='Sure'
        bgColor='bg-yellow-100'
        buttonColor='bg-[#0e74bd]'
        icon={HiOutlineExclamation}
        iconColor='orange'
      />
    </>
  );
};

Input.propTypes = {
  handleInputFocus: PropTypes.func.isRequired,
  handleSetMessages: PropTypes.func.isRequired,
  userDataStore: PropTypes.object,
};

export default Input;
