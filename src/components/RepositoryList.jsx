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
  onEndReach,
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
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
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
  let orderBy;
  let orderDirection;

  switch (sorting) {
    case "CREATED_AT_DESC":
      orderBy = "CREATED_AT";
      orderDirection = "DESC";
      break;
    case "RATING_AVERAGE_DESC":
      orderBy = "RATING_AVERAGE";
      orderDirection = "DESC";
      break;
    case "RATING_AVERAGE_ASC":
      orderBy = "RATING_AVERAGE";
      orderDirection = "ASC";
      break;
  }

  const { repositories, fetchMore } = useRepositories({
    orderBy,
    orderDirection,
    searchKeyword: searchValue,
    first: 8,
  });

  const onEndReach = () => {
    fetchMore();
    console.log("You have reached the end of the list");
  };
  return (
    <RepositoryListContainer
      repositories={repositories}
      setSorting={setSorting}
      setSearchValue={setSearchValue}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
