import { RepositoryItemContainer } from "./RepositoryItem";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import { Text } from "react-native";

const SingleRepositoryView = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);
  console.log("id: ", id, "item", repository);
  const showButton = true;
  if (repository === undefined) return <Text>loading...</Text>;

  return <RepositoryItemContainer item={repository} showButton={showButton} />;
};

export default SingleRepositoryView;
