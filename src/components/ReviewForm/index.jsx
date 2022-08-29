import useCreateReview from "../../hooks/useCreateReview";
import ReviewFormContainer from "./ReviewFormContainer";

const ReviewForm = () => {

  const [createReview, result] = useCreateReview();

  const onSubmit = async (reviewItem) => {
    console.log(reviewItem);

    try {
     await createReview({ reviewItem });
      console.log('result', result)
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewFormContainer onSubmit={onSubmit} />;
};

export default ReviewForm;
