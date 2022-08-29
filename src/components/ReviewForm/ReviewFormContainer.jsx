import { Formik } from "formik";
import * as yup from "yup";
import CreateReviewFormik from "./CreateReviewFormik";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .string()
    .required("Rating is required")
    .min(0, "rating must be over 0")
    .max(100, "maximum of 100 is allowed"),
});

const ReviewFormContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <CreateReviewFormik onSubmit={handleSubmit} />}
    </Formik>
  );
};
export default ReviewFormContainer;
