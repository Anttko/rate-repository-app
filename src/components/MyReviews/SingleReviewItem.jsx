import { View, StyleSheet } from "react-native";
import Text from "../Text";
import { format, parseISO } from "date-fns";
import theme from "../../theme";

const reviewItemStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 5,
    flexDirection: "column",
    flexGrow: 1,
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: "row",
  },
  ratingContainerGood: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    borderStyle: "solid",
    borderColor: theme.colors.primary,
    borderWidth: 2,
    flexGrow: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  ratingContainerBad: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    borderStyle: "solid",
    borderColor: theme.colors.red,
    borderWidth: 2,
    flexGrow: 0,
    flexDirection: "row",
    justifyContent: "center",
  },

  ratingGood: {
    alignSelf: "center",
    color: theme.colors.primary,
  },
  ratingBad: {
    alignSelf: "center",
    color: theme.colors.red,
  },
  nameContainer: { flexShrink: 1, marginLeft: 10 },
});

const SingleReviewItem = ({ review }) => {
  const formattedDate = format(parseISO(review.createdAt), "dd.MM.yyyy");

  return (
    <View style={reviewItemStyles.container}>
      <View style={reviewItemStyles.headerContainer}>
        <View
          style={
            review.rating >= 60
              ? reviewItemStyles.ratingContainerGood
              : reviewItemStyles.ratingContainerBad
          }
        >
          <Text
            fontWeight="bold"
            style={
              review.rating >= 60
                ? reviewItemStyles.ratingGood
                : reviewItemStyles.ratingBad
            }
          >
            {review.rating}
          </Text>
        </View>
        <View style={reviewItemStyles.nameContainer}>
          <Text fontWeight="bold">{review.repository.fullName}</Text>
          <Text color="textSecondary">{formattedDate}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default SingleReviewItem;
