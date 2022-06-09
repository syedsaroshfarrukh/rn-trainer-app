import * as yup from "yup";

const changePasswordValidation = yup.object().shape({
  password: yup.string().required("Password is required"),
  passwordConfirmation: yup
    .string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});

export default changePasswordValidation;
