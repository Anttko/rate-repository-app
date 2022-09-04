import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";
import { useNavigate } from "react-router-native";

const useCreateReview = () => {
  const nav = useNavigate();
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ reviewItem }) => {
    const review = { ...reviewItem, rating: parseInt(reviewItem.rating) };

    const { data } = await mutate({ variables: { review } });

    nav(`/${data.createReview.repositoryId}`);
  };

  return [createReview, result];
};

export default useCreateReview;
