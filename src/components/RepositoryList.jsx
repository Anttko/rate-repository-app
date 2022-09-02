import { useState } from "react";
import { FlatList, View, StyleSheet, TouchableHighlight } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import theme from "../theme";
import SortRepositories from "./SortRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 8,
    borderRadius: 1,
    backgroundColor: theme.colors.greySeparator,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  setSorting,
  setSearchValue,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  return (
    <FlatList
      ListHeaderComponent={
        <SortRepositories
          setSorting={setSorting}
          setSearchValue={setSearchValue}
        />
      }
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item, index, separators }) => (
        <TouchableHighlight
          key={index}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}
        >
          <RepositoryItem item={item} />
        </TouchableHighlight>
      )}
    />
  );
};

const RepositoryList = () => {
  const [sorting, setSorting] = useState();
  const [searchValue, setSearchValue] = useState();

  const { repositories } = useRepositories(sorting, searchValue);
  console.log(repositories);
  return (
    <RepositoryListContainer
      repositories={repositories}
      setSorting={setSorting}
      setSearchValue={setSearchValue}
    />
  );
};

export default RepositoryList;
/*
repositories={repositories}
*/
