import * as React from "react";
import PropTypes from "prop-types";
import swal from "sweetalert";

import SendButton from "./SendButton";
import "./style/SendButton.scss";

const Input = ({ handleInputFocus, handleSetMessages }) => {
  const [messages, setMessages] = React.useState(
    JSON.parse(localStorage.getItem("Conversation History")) || []
  );

  const [userInput, setUserInput] = React.useState("");
  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const userData = JSON.parse(localStorage.getItem("User Data Form"));

  const handleInputValidation = () => {
    if (userData === null) {
      swal(
        "Ooops",
        "Isi formulir nama, email, dan nomor telepon dahulu!",
        "warning"
      );
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

      fetch("http://127.0.0.1:5000/request", {
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
    <div className="h-[100px] min-h-[100px] flex flex-col items-center">
      <hr className="w-[350px] border border-solid border-[#e0e0e0]" />
      <div className="flex w-full justify-around my-auto">
        <input
          className="border-[none] outline-none text-sm"
          type="text"
          placeholder="Tulis pesan Anda..."
          onClick={handleInputClick}
          onFocus={() => handleInputFocus(true)}
          onBlur={() => handleInputFocus(false)}
          value={userInput}
          onChange={handleChange}
          onKeyUp={handleKeyPress}
          readOnly={userData === null}
        />
        <SendButton handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

Input.propTypes = {
  handleInputFocus: PropTypes.func.isRequired,
  handleSetMessages: PropTypes.func.isRequired,
};

export default Input;
