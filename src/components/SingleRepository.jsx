import { RepositoryItemContainer } from "./RepositoryItem";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import { FlatList, View , StyleSheet} from "react-native";
import Text from "./Text";
import { format, parseISO } from "date-fns";

const styles = StyleSheet.create({
  separator: {
    height:5,
  },

})

const RepositoryInfo = ({ repository }) => {
  const showButton = true;
  return <RepositoryItemContainer item={repository} showButton={showButton} />;
};

const ReviewItem = ({ review }) => {
  const formattedDate = format(parseISO(review.createdAt), "dd.MM.yyyy");

  return (
    <View>
      <View>
        <Text>{review.rating}</Text>
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
