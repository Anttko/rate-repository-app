import { StyleSheet, View } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";
import { CHECK_USER } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  item: {
    flexShrink: 1,
    marginBottom: 25,
    marginLeft: 25,
  },
});
const AppBarTabItem = ({ linkTo, text, color }) => {
  return (
    <View style={styles.item}>
      <Link to={linkTo}>
        <Text color={color}>{text}</Text>
      </Link>
    </View>
  );
};
const AppBarTab = () => {
  let checkIfLoggedIn = useQuery(CHECK_USER);
  console.log('loggedIn', checkIfLoggedIn.data)
  return (
    <View style={styles.container}>
      <AppBarTabItem linkTo={"/"} color={"white"} text={"Repositories"} />

      {checkIfLoggedIn.data?.me === undefined || checkIfLoggedIn?.data.me === null ? (
        <AppBarTabItem linkTo={"/signin"} color={"white"} text={"Sign In"} />
      ) : (
        <AppBarTabItem linkTo={"/signout"} color={"white"} text={"Sign out"} />
      )}
    </View>
  );
};
export default AppBarTab;
