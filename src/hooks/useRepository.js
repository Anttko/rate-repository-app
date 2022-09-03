import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (variables) => {
  const { data, error, loading, fetchMore, ...result } = useQuery(
    GET_REPOSITORY,
    {
      variables,
      fetchPolicy: "cache-and-network",
    }
  );
    console.log('single.', variables)
  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  console.log("DATA", data);
  const repository = data ? data.repository : undefined;

  return { repository, fetchMore: handleFetchMore, loading, error, ...result };
};

export default useRepository;
