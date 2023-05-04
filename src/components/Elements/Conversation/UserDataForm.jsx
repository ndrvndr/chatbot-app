import clsx from "clsx";
import swal from "sweetalert";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";
import Schema from "./config/schema";

const UserDataForm = () => {
  const handleFormSubmit = (values) => {
    const userData = {
      Name: values.name,
      Email: values.email,
      PhoneNumber: values.phoneNumber,
      isSubmit: true,
      UUID: uuidv4(),
    };
    localStorage.setItem("User Data Form", JSON.stringify(userData));
    swal("Terima Kasih", "Formulir kamu telah diserahkan", "success");
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
    <div className="w-full max-w-xs mx-auto my-5 rounded-2xl bg-[#f1f7fe]">
      <form
        className="relative flex flex-col gap-4 text-center pt-8 pb-6 px-6"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <span className="text-sm">
          Kami mengingatkan Anda bahwa percakapan ini direkam dan akan digunakan
          untuk tujuan pengawasan dan peningkatan layanan
        </span>
        <div className="bg-transparent w-full mt-4 mb-2 mx-0 rounded-lg space-y-1">
          <input
            type="text"
            readOnly={values.isSubmit}
            name="name"
            value={values.name}
            className={
              errors.name
                ? "h-10 w-full text-sm p-3 border border-red-600 outline-none"
                : "h-10 w-full text-sm p-3 outline-none"
            }
            placeholder="Nama Lengkap"
            onChange={handleChange}
            onBlur={handleblur}
            required
          />
          {errors.name && (
            <p className="text-right text-xs font-medium ml-3 text-red-500">
              {errors.name}
            </p>
          )}
          <input
            type="email"
            readOnly={values.isSubmit}
            name="email"
            value={values.email}
            className={
              errors.email
                ? "h-10 w-full text-sm p-3 border border-red-600 outline-none"
                : "h-10 w-full text-sm p-3 outline-none"
            }
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleblur}
            required
          />
          {errors.email && (
            <p className="text-right text-xs font-medium ml-3 text-red-500">
              {errors.email}
            </p>
          )}
          <input
            type="tel"
            readOnly={values.isSubmit}
            name="phoneNumber"
            value={values.phoneNumber}
            className={
              errors.phoneNumber
                ? "h-10 w-full text-sm p-3 border border-red-600 outline-none"
                : "h-10 w-full text-sm p-3 outline-none"
            }
            placeholder="Nomor Telepon"
            onChange={handleChange}
            onBlur={handleblur}
            required
          />
          {errors.phoneNumber && (
            <p className="text-right text-xs ml-3 text-red-500">
              {errors.phoneNumber}
            </p>
          )}
        </div>
        {storedData ? (
          <span className="text-sm">
            Terima kasih telah mengirimkan formulir, ini akan membantu kami
            memahami kebutuhan Anda dan memberikan layanan yang lebih baik.
          </span>
        ) : (
          <button
            type="submit"
            disabled={values.isSubmit}
            className={clsx(
              "px-4 py-2.5 rounded-3xl border-0 ",
              "bg-[#0e74bd] text-white hover:bg-[#064a7a]",
              "font-[NotoSans-Bold] cursor-pointer",
              "transition-[background-color] duration-[0.3s] ease-[ease]"
            )}
          >
            Kirim
          </button>
        )}
      </form>
    </div>
  );
};

export default UserDataForm;
