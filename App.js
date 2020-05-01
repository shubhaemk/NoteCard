import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NoteCardStatusBar from './src/Components/NoteCardStatusBar/NoteCardStatusBar';
import Navigation from './src/Navigation/Navigation';
import { darkTheme, lightTheme } from './src/Constants/Colors';

class App extends React.Component {
  state = {
    theme: 'dark'
  };
  render() {
    const { theme } = this.state;
    if (theme === 'dark') {
      global.theme = darkTheme;
    } else {
      global.theme = lightTheme;
    }

    return (
      <NavigationContainer>
        <NoteCardStatusBar backgroundColor={darkTheme.screenBackgroundColor} barStyle={darkTheme.statusBarStyle} />
        <Navigation />
      </NavigationContainer>
    );
  }
}

export default App;
