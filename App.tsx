import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale, s, vs, ms } from 'react-native-size-matters';

const App = () => {
  return (
    <SafeAreaView>
      <Image
        source={{
          uri: "https://media.geeksforgeeks.org/wp-content/uploads/20231113164232/React-native-copy.webp",
        }}
        style={{height: vs(300), width: s(300)}}
      />
      <Text style={{paddingTop: ms(50), fontSize: (200)}}>App</Text>
    </SafeAreaView>
  );
}

export default App

const styles = StyleSheet.create({})