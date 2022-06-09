import * as yup from "yup";

const profileValidationSchema = yup.object().shape({
  firstName: yup.string().min(2).max(16).required("First Name Is Required"),
  lastName: yup.string().min(2).max(16).required("Last Name Is Required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  phoneNo: yup
    .string()
    .required("This field is Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
});

export default profileValidationSchema;
