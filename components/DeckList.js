import React from 'react'
import { Text, View } from 'react-native'

function DeckList() {
  return (
    <View>
      <Text>List of decks here!</Text>
    </View>
  )
}

export default DeckList

// export default function App() {
//   const data = [...Array(50).keys()]
//   const renderItem = ({ item }) => (
//     <View style={styles.box} key={ item }>
//       <Text>This is text item { item }!!!!</Text>
//     </View>
//   )

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={ data }
//         renderItem={ renderItem }
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }