import { useQuery } from "@apollo/client";
import { CHECK_USER } from "../graphql/queries";

const useGetUser = (variables) => {
  const { data, error, loading, fetchMore, refetch, ...result } = useQuery(
    CHECK_USER,
    {
      variables,
      fetchPolicy: "cache-and-network",
    }
  );

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.me.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  const me = data ? data.me : undefined;

  return { me, fetchMore: handleFetchMore, loading, error, refetch, ...result };
};

export default useGetUser;
