import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import themes from '../theme';

const styles = StyleSheet.create({
    error: {
        borderColor: themes.colors.error
    },

    passed: {
        borderColor: themes.colors.dark
    }
})

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [style, error ? styles.error : styles.passed];

    return <NativeTextInput style={textInputStyle} {...props} error={error} />;
};

export default TextInput;