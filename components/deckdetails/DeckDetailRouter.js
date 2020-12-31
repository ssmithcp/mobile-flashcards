import React from 'react'
import { connect } from 'react-redux'

import { View } from 'react-native'

import { removeDeck } from '../../store/actions'

import DeckDetail from './DeckDetail'
import AddCard from './AddCard'

function DeckDetailRouter({ deck, navigation, removeDeck }) {
  const [screen, setScreen] = React.useState('main')

  if (!deck) { // when deck is being deleted
    return <></>
  }

  return (
    <View style={ { flex: 1 } }>
      { (screen === 'main' &&
        <DeckDetail
          deck={ deck }
          addCard={ () => setScreen('addCard') }
          startQuiz={ () => startQuiz('quiz') }
          deleteDeck={ () => removeDeck(deck.id).then(() => navigation.goBack()) }
        />)
      }
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

export default connect(mapStateToProps, { removeDeck })(DeckDetailRouter)