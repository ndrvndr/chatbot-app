import PropTypes from "prop-types";

import "./style/TypingStatus.scss";

const TypingStatus = ({ isTyping, isInputFocused }) => {
  return (
    <div
      className={`typing__status ${
        isTyping && isInputFocused ? "typing__status--active" : ""
      }`}
    >
      <span className="text-sm">mengetik</span>
      <div className="typing__dot--group">
        <span className="typing__dot"></span>
        <span className="typing__dot"></span>
        <span className="typing__dot"></span>
      </div>
    </div>
  );
};

TypingStatus.propTypes = {
  isTyping: PropTypes.bool.isRequired,
  isInputFocused: PropTypes.bool.isRequired,
};
export default TypingStatus;
