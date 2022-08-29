import { SIGN_UP } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";

const useSignUp = () => {
  const nav = useNavigate();
  const [mutate, result] = useMutation(SIGN_UP);

  const signUp = async ({ signUpItem }) => {
    const user = {
      username: signUpItem.username,
      password: signUpItem.password,
    };
    const { data } = await mutate({ variables: { user } });
    console.log(data);
    nav(`/`);
  };
  return [signUp, result];
};
export default useSignUp;
