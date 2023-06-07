import PropTypes from "prop-types";

import { RiCloseLine } from "react-icons/ri";

const CloseButton = ({ toggleContent }) => {
  return (
    <div
      className='ml-[70px] cursor-pointer min-[449px]:hidden'
      onClick={() => toggleContent()}
    >
      <RiCloseLine color='#fff' fontSize='2.6em' />
    </div>
  );
};

CloseButton.propTypes = {
  toggleContent: PropTypes.func.isRequired,
};

export default CloseButton;
