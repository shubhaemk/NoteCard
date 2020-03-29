import React from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';

import { Styles } from './NoteCardHomeScreenStyleSheet';

import { cardList } from '../../Constants/dummyData';
import NoteCard from '../../Components/NoteCard/NoteCard';
import NoteListHeader from '../../Components/NoteListHeader/NoteListHeader';
class NoteCardHomeScreen extends React.Component {
  state = {
    cardList
  };

  _renderNoteCard = ({ item }) => {
    const { cardTitle, cardText } = item;
    return <NoteCard cardTitle={cardTitle} cardText={cardText} />;
  };

  _keyExtractorNoteCard = item => item[`uuid`];

  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <View style={Styles.pinnedNoteListContainer}></View>
        <View style={Styles.noteListContainer}>
          <NoteListHeader />
          <FlatList
            data={this.state.cardList}
            renderItem={this._renderNoteCard}
            keyExtractor={this._keyExtractorNoteCard}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default NoteCardHomeScreen;
