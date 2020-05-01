import { StyleSheet } from 'react-native';
import { darkTheme } from '../../Constants/Colors';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.screenBackgroundColor,
    alignItems: 'center'
  },
  pinnedNoteListContainer: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  noteListContainer: {
    width: '100%',
    height: '75%'
  }
});
