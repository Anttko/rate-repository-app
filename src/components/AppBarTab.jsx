import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    item: {
        flexShrink: 1,
        marginBottom: 25,
        marginLeft: 25,
    },
})
const AppBarTabItem = ({ linkTo, text, color }) => {
    return (
        <View style={styles.item}>
            <Link to={linkTo}>
                <Text color={color}>{text}</Text>
            </Link>
        </View>
    )
}
const AppBarTab = () => {
    return (
        <View style={styles.container}>
            <AppBarTabItem
                linkTo={'/'}
                color={'white'}
                text={'Repositories'}
            />
            <AppBarTabItem
                linkTo={'/signin'}
                color={'white'}
                text={'Sign In'}
            />
        </View>
    )
};
export default AppBarTab;