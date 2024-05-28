import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import { backgroundMessageHandler, requestUserPermission } from './src/util/Notifications';

const App = () => {

  useEffect(() => {
    requestUserPermission()
    backgroundMessageHandler()
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        How To Push Notifications Using Firebase {'\n'} In React Native
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 17,
    textAlign:"center"
  },
});
