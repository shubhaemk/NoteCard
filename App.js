import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NoteCardStatusBar from './src/Components/NoteCardStatusBar/NoteCardStatusBar';
import Navigation from './src/Navigation/Navigation';
import { screenBackgroundColor } from './src/Constants/Colors';

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <NoteCardStatusBar backgroundColor={screenBackgroundColor.light} barStyle={'dark-content'} />
        <Navigation />
      </NavigationContainer>
    );
  }
}

export default App;
