import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";
import Schema from "./schema/schema";
import MyModal from "../Dialog";
import { HiOutlineCheck } from "react-icons/hi";

const UserDataForm = (props) => {
  const { handleInputFocus, handleUserData } = props;
  let [isOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleFormSubmit = (values) => {
    const userData = {
      Name: values.name,
      Email: values.email,
      PhoneNumber: values.phoneNumber,
      isSubmit: true,
      UUID: uuidv4(),
    };
    localStorage.setItem("User Data Form", JSON.stringify(userData));
    openModal();
    handleUserData(userData);
  };

  const storedData = JSON.parse(localStorage.getItem("User Data Form"));

  const initialValues = {
    name: storedData ? storedData.Name : "",
    email: storedData ? storedData.Email : "",
    phoneNumber: storedData ? storedData.PhoneNumber : "",
    isSubmit: storedData ? storedData.isSubmit : false,
  };

  const { values, errors, handleblur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: handleFormSubmit,
  });

  return (
    <>
      <div className='mx-auto mb-5 w-full max-w-xs rounded-2xl bg-[#F3E8FF]'>
        <form
          className='relative flex flex-col gap-4 px-6 pb-6 pt-8 text-center'
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <span className='text-sm'>
            Kami mengingatkan Anda bahwa percakapan ini direkam dan akan
            digunakan untuk tujuan pengawasan dan peningkatan layanan.
          </span>
          <div className='mx-0 mb-2 mt-4 w-full space-y-1 rounded-lg bg-transparent'>
            <input
              type='text'
              disabled={storedData ? true : false}
              name='name'
              value={values.name}
              className={
                errors.name
                  ? "h-10 w-full rounded-md border border-red-600 p-3 text-sm outline-none"
                  : "h-10 w-full rounded-md bg-white p-3 text-sm outline-none"
              }
              placeholder='Nama Lengkap'
              onChange={handleChange}
              onFocus={() => handleInputFocus(true)}
              onBlur={() => {
                handleblur;
                handleInputFocus(false);
              }}
              required
            />
            {errors.name && (
              <p className='ml-3 text-right text-xs font-medium text-red-500'>
                {errors.name}
              </p>
            )}
            <input
              type='email'
              disabled={storedData ? true : false}
              name='email'
              value={values.email}
              className={
                errors.email
                  ? "h-10 w-full rounded-md border border-red-600 p-3 text-sm outline-none"
                  : "h-10 w-full rounded-md bg-white p-3 text-sm outline-none"
              }
              placeholder='Email'
              onChange={handleChange}
              onFocus={() => handleInputFocus(true)}
              onBlur={() => {
                handleblur;
                handleInputFocus(false);
              }}
              required
            />
            {errors.email && (
              <p className='ml-3 text-right text-xs font-medium text-red-500'>
                {errors.email}
              </p>
            )}
            <input
              type='tel'
              disabled={storedData ? true : false}
              name='phoneNumber'
              value={values.phoneNumber}
              className={
                errors.phoneNumber
                  ? "h-10 w-full rounded-md border border-red-600 p-3 text-sm outline-none"
                  : "h-10 w-full rounded-md bg-white p-3 text-sm outline-none"
              }
              placeholder='Nomor Telepon'
              onChange={handleChange}
              onFocus={() => handleInputFocus(true)}
              onBlur={() => {
                handleblur;
                handleInputFocus(false);
              }}
              required
            />
            {errors.phoneNumber && (
              <p className='ml-3 text-right text-xs text-red-500'>
                {errors.phoneNumber}
              </p>
            )}
          </div>
          {storedData ? (
            <span className='text-sm'>
              Terima kasih telah mengirimkan formulir. Formulir akan membantu
              kami memahami kebutuhan Anda dan memberikan layanan yang lebih
              baik.
            </span>
          ) : (
            <button
              type='submit'
              disabled={values.isSubmit}
              className={clsx(
                "rounded-3xl border-0 px-4 py-2.5 ",
                "bg-[#0e74bd] text-white hover:bg-[#064a7a]",
                "cursor-pointer font-bold",
                "transition-[background-color] duration-[0.3s] ease-[ease]"
              )}
            >
              Kirim
            </button>
          )}
        </form>
      </div>
      <MyModal
        isOpen={isOpen}
        closeModal={closeModal}
        dialogTitle='Selamat!'
        dialogDesc='Formulir Anda telah berhasil dikirim. Terima kasih telah meluangkan waktu untuk mengisi formulir.'
        dialogButton='Hurray'
        bgColor='bg-green-100'
        buttonColor='bg-[#0e74bd]'
        icon={HiOutlineCheck}
        iconColor='green'
      />
    </>
  );
};

UserDataForm.propTypes = {
  handleInputFocus: PropTypes.func.isRequired,
  handleUserData: PropTypes.func.isRequired,
};

export default UserDataForm;
