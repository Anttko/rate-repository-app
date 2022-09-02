import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.greySeparator,
    color: theme.colors.textPrimary,
  },
  menuItemHeader: {
    color: theme.colors.textSecondary,
  },
});

const SortRepositoriesContainer = ({ setSorting }) => {
  const menuItems = [
    { name: "Select an item..." },
    {
      name: "Lastest repostitories",
      value: "CREATED_AT_DESC",
    },
    {
      name: "Highest rated repositories",
      value: "RATING_AVERAGE_DESC",
    },
    {
      name: "Lowest rated repositories",
      value: "RATING_AVERAGE_ASC",
    },
  ];
  const [selectedSorting, setselectedSorting] = useState(menuItems[1].name);

  useEffect(() => {
    setSorting(selectedSorting);
  });
  return (
    <Picker
      style={styles.container}
      selectedValue={selectedSorting}
      onValueChange={(itemValue) => setselectedSorting(itemValue)}
    >
      {menuItems.map((item, index) => {
        if (index === 0) {
          return (
            <Picker.Item
              style={styles.menuItemHeader}
              label={item.name}
              value={index}
              key={index}
              enabled={false} // first menu item to be disabled so it can't be clicked
            />
          );
        }
        return <Picker.Item label={item.name} value={item.value} key={index} />;
      })}
    </Picker>
  );
};

export default SortRepositoriesContainer;

/*



*/
