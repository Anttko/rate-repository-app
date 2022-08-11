import { View, Image, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text'


const RepositoryItemHeaderStyles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginLeft:5,
    flexDirection: 'row',
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 6,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexShrink: 1
  },
  languageContainer: {
    padding: 5,
    color: 'white',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    flexGrow: 1,
    alignSelf: 'flex-start',
    marginTop: 5
  },

})
const RepositoryItemHeader = ({ item }) => {

  return (
    <View style={RepositoryItemHeaderStyles.container}>
      <View style={RepositoryItemHeaderStyles.avatarContainer}>
        <Image style={RepositoryItemHeaderStyles.avatar} source={{ uri: item.ownerAvatarUrl }} />
      </View>
      <View style={RepositoryItemHeaderStyles.infoContainer}>
        <Text fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
        <Text color="textSecondary">{item.description}</Text>
        <Text style={RepositoryItemHeaderStyles.languageContainer}>{item.language}</Text>
      </View>
    </View>
  )

}
const RepositoryItemBodyStyles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  
  itemContainer: {
    flexGrow: 1,
    alignItems: 'center'
  }

})

const RepositoryItemBody = ({ item }) => {


  const simplerNumbers = (number) => {
    return number > 999 ? (number / 1000).toFixed(2) + 'k' : number
  }

  return (
    <View style={RepositoryItemBodyStyles.container}>
      <View style={RepositoryItemBodyStyles.itemContainer}>
        <Text fontWeight="bold">{simplerNumbers(item.stargazersCount)}</Text>
        <Text>Stars</Text>
      </View>

      <View style={RepositoryItemBodyStyles.itemContainer}>
        <Text fontWeight="bold">{simplerNumbers(item.forksCount)}</Text>
        <Text>Forks</Text>
      </View>
      <View style={RepositoryItemBodyStyles.itemContainer}>
        <Text fontWeight="bold">{simplerNumbers(item.reviewCount)}</Text>
        <Text>Reviews</Text>
      </View>

      <View style={RepositoryItemBodyStyles.itemContainer}>
        <Text fontWeight="bold">{simplerNumbers(item.ratingAverage)}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  )
}




const RepositoryItemStyles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
});
const RepositoryItem = ({ item }) => {

  return (
    <View style={RepositoryItemStyles.container}>
      <RepositoryItemHeader item={item} />
      <RepositoryItemBody item={item} />
    </View>
  );
};


export default RepositoryItem;