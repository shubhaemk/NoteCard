import React from 'react';
import { View, Text } from 'react-native';
import { userName } from '../../Constants/dummyData';
import { Styles } from './NoteListHeaderStyleSheet';

class NoteListHeader extends React.Component {
  render() {
    return (
      <View style={Styles.noteListHeaderContainer}>
        <View style={Styles.informationContainer}>
          <View style={Styles.welcomeTitleContainer}>
            <Text style={Styles.welcomeTitleText}>{`Hi ${userName},`}</Text>
          </View>
          <View style={Styles.greetingTitleContainer}>
            <Text style={Styles.greetingTitleText}>{`Good Morning!`}</Text>
          </View>
        </View>
        <View style={Styles.addButtonContainer}>
          <View style={Styles.addButton} />
        </View>
      </View>
    );
  }
}

export default NoteListHeader;
