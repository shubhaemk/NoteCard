import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import NoteCardHomeScreen from '../Screen/NoteCardHomeScreen/NoteCardHomeScreen';
import { darkTheme } from '../Constants/Colors';

const Stack = createStackNavigator();

class Navigation extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName='Note Card'
        screenOptions={{
          headerStyle: {
            backgroundColor: darkTheme.headerBackgroundColor
          },
          headerTitleStyle: {
            color: darkTheme.titleColor,
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen name='Note Card' component={NoteCardHomeScreen} />
      </Stack.Navigator>
    );
  }
}

export default Navigation;
