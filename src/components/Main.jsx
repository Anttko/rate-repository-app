import { StyleSheet, View } from "react-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import Constants from "expo-constants";
import { Route, Routes, Navigate } from "react-router-native";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import SingleRepository from "./SingleRepository";
import ReviewForm from "./ReviewForm/index";
import SignUpForm from "./SignUpForm";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signout" element={<SignOut />} exact />
        <Route path=":id" element={<SingleRepository />} />
        <Route path="/createreview" element={<ReviewForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </View>
  );
};

export default Main;
