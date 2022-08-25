import { RepositoryItemContainer } from "./RepositoryItem";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import { FlatList, View, StyleSheet } from "react-native";
import Text from "./Text";
import { format, parseISO } from "date-fns";
import theme from "../theme";
const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
});

const RepositoryInfo = ({ repository }) => {
  const showButton = true;
  return <RepositoryItemContainer item={repository} showButton={showButton} />;
};

const reviewItemStyles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginLeft: 5,
    flexDirection: "row",
    flexGrow: 1,
  },
  ratingContainer: {
   
    paddingRight: 15,

  },
  rating: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    borderStyle: "solid",
    borderColor: theme.colors.primary,
    borderWidth: 2,
  
  },
 
});

const ReviewItem = ({ review }) => {
  const formattedDate = format(parseISO(review.createdAt), "dd.MM.yyyy");

  return (
    <View style={reviewItemStyles.container}>
      <View style={reviewItemStyles.ratingContainer}>
        <Text style={reviewItemStyles.rating}> {review.rating}</Text>
      </View>
      <View>
        <Text>{review.user.username}</Text>
        <Text>{formattedDate}</Text>
      </View>
      <View>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);
  if (repository === undefined) return <Text>loading...</Text>;
  const repositoryNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;
