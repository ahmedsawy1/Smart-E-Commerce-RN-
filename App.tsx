import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {rS} from './src/styles/responsive';
import UserIconColored from './src/assets/svg/UserIconColored';
import BookLogo from './src/assets/svg/BookLogo';

const App = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{fontSize: rS(30)}}>React Native SVG</Text>
      <UserIconColored 
          width={200}
          height={200}
          opacity={.5}
          style={{marginTop: 20}}
      />
      <BookLogo 
        style={{marginTop: 20}}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
