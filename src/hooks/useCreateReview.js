import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";
import { useNavigate } from "react-router-native";

const useCreateReview = () => {
  const nav = useNavigate();
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ reviewItem }) => {
    console.log("reviewITem:", reviewItem);
    const review = { ...reviewItem, rating: parseInt(reviewItem.rating) };
    console.log("parse int review item:", { review });
    const { data } = await mutate({ variables: { review } });

    console.log("review data usereview", data);
    nav(`/${data.createReview.repositoryId}`);
  };

  return [createReview, result];
};

export default useCreateReview;
