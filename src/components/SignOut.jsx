import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";
import useAuthStorage from "../hooks/useAuthStorage";
import { CHECK_USER } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { View, Text } from "react-native";

const SignOut = () => {
  const { data } = useQuery(CHECK_USER);
  console.log(data);
  const nav = useNavigate();
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  useEffect(async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    nav("/");
  });

  return (
    <View>
      <Text>signing out...</Text>
    </View>
  );
};

export default SignOut;
