import { Formik } from "formik";
import * as yup from "yup";
import SignUpFormik from "./SignUpFormik";

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(1, "Username is a required string with a length between 1 and 30")
    .max(30, "Username is a required string with a length between 1 and 30"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password is a required string with a length between 5 and 50")
    .max(50, "Password is a required string with a length between 5 and 50"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

const SignUpFormContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpFormik onSubmit={handleSubmit} />}
    </Formik>
  );
};
export default SignUpFormContainer;
