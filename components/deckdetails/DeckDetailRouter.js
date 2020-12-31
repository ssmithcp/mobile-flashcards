import React from 'react'
import { connect } from 'react-redux'

import { Text, View } from 'react-native'
import DeckDetail from './DeckDetail'
import AddCard from './AddCard'

function DeckDetailRouter({ deck }) {
  const [screen, setScreen] = React.useState('main')

  return (
    <View style={ { flex: 1 } }>
      { (screen === 'main' && <DeckDetail deck={ deck } />) }
      { (screen === 'addCard' && <AddCard />) }
      { (screen === 'quiz' && <Quiz />) }
    </View>
  )
}

function mapStateToProps({ decks }, { route: { params: { id: deckId }}}) {
  return {
    deck: decks[deckId],
  }
}

export default connect(mapStateToProps)(DeckDetailRouter)