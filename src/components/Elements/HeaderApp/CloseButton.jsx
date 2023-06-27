import PropTypes from "prop-types";

import { MdCloseFullscreen } from "react-icons/md";

const CloseButton = ({ toggleContent }) => {
  return (
    <div
      className='ml-[70px] cursor-pointer min-[449px]:hidden'
      onClick={() => toggleContent()}
    >
      <MdCloseFullscreen color='#fff' fontSize='2em' />
    </div>
  );
};

CloseButton.propTypes = {
  toggleContent: PropTypes.func.isRequired,
};

export default CloseButton;
