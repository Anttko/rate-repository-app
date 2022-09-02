import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (sortingValue) => {
  let orderBy;
  let orderDirection;
  switch (sortingValue) {
    case "CREATED_AT_DESC":
      orderBy = "CREATED_AT";
      orderDirection = "DESC";
      break;
    case "RATING_AVERAGE_DESC":
      orderBy = "RATING_AVERAGE";
      orderDirection = "DESC";
      break;
    case "RATING_AVERAGE_ASC":
      orderBy = "RATING_AVERAGE";
      orderDirection = "ASC";
      break;
    
  }

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection },
    fetchPolicy: "cache-and-network",
  });

  const repositories = data ? data.repositories : undefined;

  return { repositories, loading, error };
};

export default useRepositories;
