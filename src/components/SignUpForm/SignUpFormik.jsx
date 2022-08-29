import { Pressable, View, StyleSheet } from "react-native";
import FormikTextInput from "../FormikTextInput";
import theme from "../../theme";
import Text from "../Text";
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  formInput: {
    borderStyle: "solid",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 3,
    margin: 10,
    padding: 10,
    marginBottom: 20,
  },
  signUpButton: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    borderRadius: 3,
  },
});

const CreateReviewFormik = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="username"
        style={styles.formInput}
      />
      <FormikTextInput
        name="password"
        placeholder="password"
        style={styles.formInput}
      />
      <FormikTextInput
        name="passwordConfirmation"
        placeholder="password confirmation"
        style={styles.formInput}
      />

      <Pressable style={styles.signUpButton} onPress={onSubmit}>
        <Text fontWeight="bold" color="white">
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

export default CreateReviewFormik;
