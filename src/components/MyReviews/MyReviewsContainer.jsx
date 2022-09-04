import { View, FlatList, StyleSheet } from "react-native";
import theme from "../../theme";
import useGetUser from "../../hooks/useGetUser";
import ReviewItemContainer from "./ReviewItemContainer";
import useDeleteReview from "../../hooks/useDeleteReview";

const styles = StyleSheet.create({
  separator: {
    height: 8,
    borderRadius: 1,
    backgroundColor: theme.colors.greySeparator,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;

const MyReviewsContainer = () => {
  const [deleteReview] = useDeleteReview();

  const { me, fetchMore, refetch } = useGetUser({
    first: 4,
    includeReviews: true,
  });

  const onEndReach = () => {
    fetchMore();
    console.log("You have reached the end of the list");
  };

  const onDelete = async (value) => {
    console.log("ondelete value: ", value);
    const deleteReviewId = value;

    try {
      await deleteReview({ deleteReviewId });
      refetch();
    } catch (e) {
      console.log(e);
    }
  };
  const repositoryNodes = me ? me.reviews.edges.map((edge) => edge.node) : [];
  return (
    <FlatList
      data={repositoryNodes}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => (
        <ReviewItemContainer item={item} onDelete={onDelete} />
      )}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviewsContainer;
