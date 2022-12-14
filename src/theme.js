import { Platform } from "react-native";
const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBarBackGround: '#24292e',
    greySeparator: '#d7d7d9',
    whiteText: '#ffffff',
    error: '#d73a4a',
    dark: '#000000',
    red: '#FF0000',

    
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;