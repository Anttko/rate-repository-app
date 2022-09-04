import { DELETE_REVIEW } from "../graphql/mutations";
import { useMutation } from "@apollo/client";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (variables) => {
    await mutate({ variables: variables });
  };
  return [deleteReview, result];
};

export default useDeleteReview;
