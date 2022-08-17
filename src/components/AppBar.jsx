import AppBarTab from './AppBarTab'

import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBarBackGround,
    },

});
const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <AppBarTab />
            </ScrollView>
        </View>
    );
};

export default AppBar;