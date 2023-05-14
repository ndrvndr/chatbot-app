import clsx from "clsx";
import swal from "sweetalert";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";
import Schema from "./schema/schema";

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
    <div className="mx-auto my-5 w-full max-w-xs rounded-2xl bg-[#f1f7fe]">
      <form
        className="relative flex flex-col gap-4 px-6 pb-6 pt-8 text-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <span className="text-sm">
          Kami mengingatkan Anda bahwa percakapan ini direkam dan akan digunakan
          untuk tujuan pengawasan dan peningkatan layanan
        </span>
        <div className="mx-0 mb-2 mt-4 w-full space-y-1 rounded-lg bg-transparent">
          <input
            type="text"
            readOnly={values.isSubmit}
            name="name"
            value={values.name}
            className={
              errors.name
                ? "h-10 w-full border border-red-600 p-3 text-sm outline-none"
                : "h-10 w-full p-3 text-sm outline-none"
            }
            placeholder="Nama Lengkap"
            onChange={handleChange}
            onBlur={handleblur}
            required
          />
          {errors.name && (
            <p className="ml-3 text-right text-xs font-medium text-red-500">
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
                ? "h-10 w-full border border-red-600 p-3 text-sm outline-none"
                : "h-10 w-full p-3 text-sm outline-none"
            }
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleblur}
            required
          />
          {errors.email && (
            <p className="ml-3 text-right text-xs font-medium text-red-500">
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
                ? "h-10 w-full border border-red-600 p-3 text-sm outline-none"
                : "h-10 w-full p-3 text-sm outline-none"
            }
            placeholder="Nomor Telepon"
            onChange={handleChange}
            onBlur={handleblur}
            required
          />
          {errors.phoneNumber && (
            <p className="ml-3 text-right text-xs text-red-500">
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
              "rounded-3xl border-0 px-4 py-2.5 ",
              "bg-[#0e74bd] text-white hover:bg-[#064a7a]",
              "font-Bold cursor-pointer",
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
