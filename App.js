import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const data = [...Array(50).keys()]
  const renderItem = ({ item }) => (<Text key={ item }>This is text item { item }!!!!</Text>)

  return (
    <View style={styles.container}>
      <FlatList
        data={ data }
        renderItem={ renderItem }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
