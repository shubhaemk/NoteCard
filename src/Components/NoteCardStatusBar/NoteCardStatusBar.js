import { StatusBar } from 'react-native';
import React from 'react';

const NoteCardStatusBar = ({ backgroundColor, barStyle }) => {
  return <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />;
};

export default NoteCardStatusBar;
