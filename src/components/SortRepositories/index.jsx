import SortRepositoriesContainer from "./SortRepositoriesContainer";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import theme from "../../theme";
import { useDebouncedCallback } from "use-debounce";

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
  const debounced = useDebouncedCallback((value) => {
    setSearchValue(value);
  }, 500);

  const onChangeSearch = (query) => debounced(query);

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
