import * as yup from "yup";

const signupValidationSchema = yup.object().shape({
  fName: yup.string().required("First Name Is Required"),
  lName: yup.string().required("Last Name Is Required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

export default signupValidationSchema;
