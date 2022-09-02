import SortRepositoriesContainer from "./SortRepositoriesContainer";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.greySeparator,
  },
  searchBar: {
    width: "90%",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
});
const SortRepositories = ({ setSorting, setSearchValue }) => {
  const onChangeSearch = (query) => setSearchValue(query);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        style={styles.searchBar}
        onChangeText={onChangeSearch}
      />
      <SortRepositoriesContainer setSorting={setSorting} />
    </View>
  );
};

export default SortRepositories;
