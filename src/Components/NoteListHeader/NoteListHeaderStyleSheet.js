import { StyleSheet } from 'react-native';
import { horizontalPadding } from '../../Constants/Padding';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { fontLarge, fontSmall } from '../../Constants/Font';
import { appColor } from '../../Constants/Colors';

export const Styles = StyleSheet.create({
  noteListHeaderContainer: {
    width: wp('100%'),
    paddingHorizontal: horizontalPadding,
    height: hp('14%'),
    justifyContent: 'center',
    flexDirection: 'row'
  },
  informationContainer: {
    width: '70%',
    paddingHorizontal: '5%'
  },
  welcomeTitleContainer: {
    height: '50%',
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: hp('1%')
  },
  welcomeTitleText: {
    fontSize: fontLarge,
    color: appColor.primary
  },
  greetingTitleContainer: {
    height: '50%',
    width: '100%',
    justifyContent: 'flex-start'
  },
  greetingTitleText: {
    color: appColor.seondary,
    fontSize: fontSmall
  },
  addButtonContainer: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
    //backgroundColor: 'red'
  },
  addButton: {
    backgroundColor: appColor.primary,
    height: '50%',
    width: '60%',
    borderRadius: 1000
  }
});
