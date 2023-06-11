import * as React from "react";
import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function MyModal(props) {
  const {
    isOpen,
    closeModal,
    dialogTitle,
    dialogDesc,
    dialogButton,
    buttonColor,
    bgColor,
    icon,
    iconColor,
  } = props;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-20' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='flex items-center text-lg font-medium leading-6 text-gray-900'
                >
                  <div className={`mr-3 rounded-full p-2 ${bgColor}`}>
                    {icon &&
                      React.createElement(icon, {
                        size: "1.5em",
                        color: iconColor,
                      })}
                  </div>
                  {dialogTitle}
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>{dialogDesc}</p>
                </div>

                <div className='mt-5 flex justify-end'>
                  <button
                    type='button'
                    className={`inline-flex justify-center rounded-md border border-transparent font-medium text-white ${buttonColor} px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
                    onClick={closeModal}
                  >
                    {dialogButton}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
MyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  dialogTitle: PropTypes.string.isRequired,
  dialogDesc: PropTypes.string.isRequired,
  dialogButton: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  iconColor: PropTypes.string.isRequired,
};
