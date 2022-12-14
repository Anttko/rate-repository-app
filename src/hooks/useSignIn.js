import { useMutation } from "@apollo/client";
import { AUTHENTICATE_USER } from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";

const useSignIn = () => {
  const nav = useNavigate();
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE_USER);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });

    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();

    nav("/");
  };

  return [signIn, result];
};

export default useSignIn;
