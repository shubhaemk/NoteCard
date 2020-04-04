import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { cardBackgroundColor } from '../../Constants/Colors';
import { horizontalPadding } from '../../Constants/Padding';
import { fontLarge, fontSmall, fontSmaller } from '../../Constants/Font';
import { appColor } from '../../Constants/Colors';

export const Styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    marginVertical: hp('1%'),
    paddingHorizontal: horizontalPadding
  },
  card: {
    width: '100%',
    backgroundColor: cardBackgroundColor.light,
    borderRadius: 10,
    paddingVertical: '2%',
    maxHeight: hp('15%'),
    borderWidth: 0.5,
    borderColor: '#ccc'
  },
  cardHeaderContainer: {
    width: '100%',
    height: '30%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '1%'
  },
  cardHeaderTitleContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '60%',
    alignItems: 'flex-end'
  },
  cardHeaderTitleText: {
    fontSize: fontSmall,
    color: appColor.primary
  },
  cardHeaderDateContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '40%',
    alignItems: 'flex-start'
  },
  cardHeaderDateText: {
    fontSize: fontSmaller,
    color: appColor.seondary
  },
  cardBodyContainer: {
    width: '100%',
    height: '70%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: '5%',
    paddingVertical: '1%'
  },
  cardBodyText: {
    fontSize: fontSmall,
    color: appColor.seondary
  }
});
