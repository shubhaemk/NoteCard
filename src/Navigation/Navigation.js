import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import NoteCardHomeScreen from '../Screen/NoteCardHomeScreen/NoteCardHomeScreen';
import { screenBackgroundColor } from '../Constants/Colors';

const Stack = createStackNavigator();

class Navigation extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName='Note Card'
        screenOptions={{ headerStyle: { height: 0 }, headerTransparent: true }}
      >
        <Stack.Screen name='Note Card' component={NoteCardHomeScreen} />
      </Stack.Navigator>
    );
  }
}

export default Navigation;
