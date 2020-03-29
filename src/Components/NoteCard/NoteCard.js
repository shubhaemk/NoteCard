import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from './NoteCardStyleSheet';
import { getFormatedDate } from '../../Constants/Date';

class NoteCard extends React.Component {
  render() {
    const { cardTitle, cardText } = this.props;

    return (
      <View style={Styles.container}>
        <View style={Styles.card}>
          <View style={Styles.cardHeaderContainer}>
            <View style={Styles.cardHeaderTitleContainer}>
              <Text style={Styles.cardHeaderTitleText}>{cardTitle}</Text>
            </View>
            <View style={Styles.cardHeaderDateContainer}>
              <Text style={Styles.cardHeaderDateText}>{getFormatedDate(new Date())}</Text>
            </View>
          </View>
          <View style={Styles.cardBodyContainer}>
            <Text numberOfLines={6} ellipsizeMode='tail' style={Styles.cardBodyText}>
              {cardText}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default NoteCard;
