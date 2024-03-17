import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Fonts } from './src/styles/fonts'

const App = () => {
  return (
    <SafeAreaView style={{justifyContent:"center", alignItems:"center", flex:1}}>
      <Text style={{fontSize: 50, fontFamily: Fonts.hanumanBlack}}>App</Text>
      <Text style={{fontSize: 50, fontFamily: Fonts.hanumanBold}}>App</Text>
      <Text style={{fontSize: 50, fontFamily: Fonts.hanumanLight}}>App</Text>
      <Text style={{fontSize: 50, fontFamily: "Hanuman-Regular"}}>App</Text>
      <Text style={{fontSize: 50, fontFamily: "Hanuman-Thin"}}>App</Text>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})