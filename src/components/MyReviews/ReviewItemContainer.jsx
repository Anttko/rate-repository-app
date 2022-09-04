import SingleReviewItem from "./SingleReviewItem";
import { View, StyleSheet, Pressable, Alert } from "react-native";
import Text from "../Text";
import theme from "../../theme";
import * as Linking from "expo-linking";
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  viewRepositoryButton: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    borderRadius: 3,
    flexGrow: 1,
  },
  deleteReviewButton: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.red,
    alignItems: "center",
    borderRadius: 3,
    flexGrow: 1,
  },
});
const ReviewItemContainer = ({ item, onDelete }) => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("cancelled"),
          style: "CANCEL",
        },
        { text: "DELETE", onPress: () => onDelete(item.id) },
      ]
    );

  return (
    <View style={styles.container}>
      <SingleReviewItem review={item} />
      <View style={styles.buttonView}>
        <Pressable
          style={styles.viewRepositoryButton}
          onPress={() => Linking.openURL(item.repository.url)}
        >
          <Text color="white" fontWeight="bold">
            View repository
          </Text>
        </Pressable>
        <Pressable
          style={styles.deleteReviewButton}
          onPress={createTwoButtonAlert}
        >
          <Text color="white" fontWeight="bold">
            Delete review
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ReviewItemContainer;
