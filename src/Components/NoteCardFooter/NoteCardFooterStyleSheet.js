import { StyleSheet } from 'react-native';
import { darkTheme } from '../../Constants/Colors';
export const Style = StyleSheet.create({
  container: {
    width: '100%',
    height: '25%',
    backgroundColor: darkTheme.footerBackgroundColor,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc'
  }
});
