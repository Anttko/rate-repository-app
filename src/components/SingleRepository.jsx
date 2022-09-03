import { RepositoryItemContainer } from "./RepositoryItem";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import { FlatList, View, StyleSheet } from "react-native";
import Text from "./Text";
import { format, parseISO } from "date-fns";
import theme from "../theme";
const styles = StyleSheet.create({
  separator: {
    height: 8,
    borderRadius: 1,
    backgroundColor: theme.colors.greySeparator,
  },
});

const RepositoryInfo = ({ repository }) => {
  const showButton = true;
  return <RepositoryItemContainer item={repository} showButton={showButton} />;
};

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

const ReviewItem = ({ review }) => {
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
          <Text fontWeight="bold">{review.user.username}</Text>
          <Text color="textSecondary">{formattedDate}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
  const { id } = useParams();

  const { repository, fetchMore } = useRepository({
    id,
    first: 3,
  });

  const onEndReach = () => {
    fetchMore();
    console.log("You have reached the end of the list");
  };

  if (repository === undefined) return <Text>loading...</Text>;
  const repositoryNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];
  return (
    <FlatList
      data={repositoryNodes}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;
