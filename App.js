import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import Constants from 'expo-constants'

import MainContainer from './components/MainContainer'

function DefaultStatusBar({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <DefaultStatusBar backgroundColor={'#000000'} barStyle="light-content" />
      <MainContainer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  box: {
    height: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }
})
