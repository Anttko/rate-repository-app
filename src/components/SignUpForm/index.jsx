import SignUpFormContainer from "./SignUpFormContainer";
import useSignUp from "../../hooks/useSignUp";


const SignUpForm = () => {
  const [SignUp] = useSignUp();

  const onSubmit = async (signUpItem) => {
    try {
      console.log(signUpItem);
      await SignUp({signUpItem});
    } catch (e) {
      console.log(e);
    }
  };
  return <SignUpFormContainer onSubmit={onSubmit} />;
};
export default SignUpForm;
