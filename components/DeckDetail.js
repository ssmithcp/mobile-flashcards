import React from 'react'
import { Text, View } from 'react-native'

function DeckDetail({ route: { params: { id: deckId }}}) {
  return (
    <View>
      <Text>Deck details for deck { deckId }</Text>
    </View>
  )
}

export default DeckDetail