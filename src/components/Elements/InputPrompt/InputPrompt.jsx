import PropTypes from "prop-types";

const InputPrompt = (props) => {
  const {
    handleInputClick,
    handleInputFocus,
    userInput,
    handleChange,
    handleKeyPress,
    userData,
  } = props;
  return (
    <>
      <input
        className="border-[none] text-sm outline-none"
        type="text"
        placeholder="Tulis pesan Anda..."
        onClick={handleInputClick}
        onFocus={() => {
          if (userData !== null) {
            handleInputFocus(true);
          }
        }}
        onBlur={() => {
          if (userData !== null) {
            handleInputFocus(false);
          }
        }}
        value={userInput}
        onChange={handleChange}
        onKeyUp={handleKeyPress}
        readOnly={userData === null}
      />
    </>
  );
};

InputPrompt.propTypes = {
  handleInputClick: PropTypes.func.isRequired,
  handleInputFocus: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  userData: PropTypes.object,
};

export default InputPrompt;
