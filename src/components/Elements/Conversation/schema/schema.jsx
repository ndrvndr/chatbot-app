import * as yup from "yup";

const Schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Nama minimal harus 2 karakter")
    .required("Required"),
  email: yup.string().email("Email tidak valid").required("Required"),
  phoneNumber: yup
    .string()
    .matches(
      /^[0-9]+$/,
      "Nomor telepon harus berupa angka dan tidak mengandung karakter lain"
    )
    .min(12, "Nomor telepon minimal harus 12 digit")
    .required("Required"),
});

export default Schema;
