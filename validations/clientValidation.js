import * as yup from "yup";

const clientValidation = yup.object().shape({
  firstName: yup.string().required("First Name Is Required"),
  lastName: yup.string().required("Last Name Is Required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
});

export default clientValidation;
