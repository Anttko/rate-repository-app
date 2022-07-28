import {  View, Text } from 'react-native';


const RepositoryItem = ({item}) => {
    return (
     <View>
        <Text>{item.fullName}</Text>
        </View>
   
    );
  };

export default RepositoryItem;