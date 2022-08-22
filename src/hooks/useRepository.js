import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  console.log("repo id", id);

  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });
  console.log("DATA", data);
  const repository = data ? data.repository : undefined;

  return { repository, loading, error };
};

export default useRepository;
