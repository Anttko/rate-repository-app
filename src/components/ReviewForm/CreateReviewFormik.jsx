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
  reviewButton: {
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
        name="ownerName"
        placeholder="Repository owner name"
        style={styles.formInput}
      />
      <FormikTextInput
        name="repositoryName"
        placeholder="Repository name"
        style={styles.formInput}
      />
      <FormikTextInput
        name="rating"
        placeholder="Rating between 0 and 100"
        style={styles.formInput}
      />
      <FormikTextInput
        name="text"
        placeholder="text"
        style={styles.formInput}
      />
      <Pressable style={styles.reviewButton} onPress={onSubmit}>
        <Text fontWeight="bold" color="white">
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

export default CreateReviewFormik;
