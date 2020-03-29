import { StyleSheet } from 'react-native';
import { screenBackgroundColor } from '../../Constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: screenBackgroundColor.light,
    alignItems: 'center'
  },
  pinnedNoteListContainer: {
    width: '100%',
    height: '20%'
  },
  noteListContainer: {
    width: wp('100%'),
    height: '80%'
  }
});
