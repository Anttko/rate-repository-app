import { Formik } from "formik";
import { Pressable, View, StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import theme from "../theme";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("username is required")
    .min(3, "username must be over 3 characters"),
  password: yup
    .string()
    .min(8, "password must be at least 8 characters long")
    .required("password is required"),
});

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  formInputUser: {
    borderStyle: "solid",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 3,
    margin: 10,
    padding: 10,
    marginBottom: 20,
  },
  formInputPass: {
    borderStyle: "solid",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 3,
    margin: 10,
    padding: 10,
    marginBottom: 5,
  },

  signInButton: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    borderRadius: 3,
  },
});
const SignInFormik = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="username"
        style={styles.formInputUser}
      />
      <FormikTextInput
        name="password"
        placeholder="password"
        style={styles.formInputPass}
      />
      <Pressable style={styles.signInButton} onPress={onSubmit}>
        <Text fontWeight="bold" color="white">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInFormik onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(values);
    try {
      await signIn({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
