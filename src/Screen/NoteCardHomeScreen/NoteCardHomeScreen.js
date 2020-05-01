import React from 'react';
import { SafeAreaView, FlatList, View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { Styles } from './NoteCardHomeScreenStyleSheet';

import { cardList } from '../../Constants/dummyData';
import NoteCard from '../../Components/NoteCard/NoteCard';
import NoteListHeader from '../../Components/NoteListHeader/NoteListHeader';
import NoteCardFooter from '../../Components/NoteCardFooter/NoteCardFooter';
class NoteCardHomeScreen extends React.Component {
  state = {
    cardList
  };

  _renderNoteCard = ({ item }) => {
    const { cardTitle, cardText } = item;
    return <NoteCard cardTitle={cardTitle} cardText={cardText} />;
  };

  _keyExtractorNoteCard = item => item[`uuid`];

  _renderPinnedNotes = ({ item, index }) => {
    const { cardTitle, cardText } = item;
    return <NoteCard cardTitle={cardTitle} cardText={cardText} />;
  };

  render() {
    console.log(parseInt(Dimensions.get('window').width) + 200);
    return (
      <SafeAreaView style={Styles.container}>
        {/* <View style={Styles.pinnedNoteListContainer}>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={this.state.cardList}
            renderItem={this._renderPinnedNotes}
            layout={'stack'}
            //layoutCardOffset={18}
            sliderWidth={parseInt(Dimensions.get('window').width)}
            itemWidth={parseInt(Dimensions.get('window').width)}
          />
        </View> */}
        <NoteListHeader />
        <View style={Styles.noteListContainer}>
          <FlatList
            data={this.state.cardList}
            renderItem={this._renderNoteCard}
            keyExtractor={this._keyExtractorNoteCard}
          />
        </View>
        <NoteCardFooter />
      </SafeAreaView>
    );
  }
}

export default NoteCardHomeScreen;
