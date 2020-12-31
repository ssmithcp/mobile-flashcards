import React from 'react'
import { connect } from 'react-redux'

import { View } from 'react-native'

import { removeDeck } from '../../store/actions'

import DeckDetail from './DeckDetail'
import AddCard from './AddCard'
import Quiz from './Quiz'

function DeckDetailRouter({ deck, navigation, removeDeck }) {
  const [screen, setScreen] = React.useState('main')

  if (!deck) { // when deck is being deleted
    return <></>
  }

  const gotoAddCard = () => setScreen('addCard')
  const gotoStartQuiz = () => setScreen('quiz')
  const deleteDeck = () => removeDeck(deck.id).then(() => navigation.goBack())
  const goBack = () => setScreen('main')

  return (
    <View style={ { flex: 1 } }>
      { (screen === 'main' &&
        <DeckDetail
          deck={ deck }
          addCard={ gotoAddCard }
          startQuiz={ gotoStartQuiz }
          deleteDeck={ deleteDeck }
        />)
      }
      { (screen === 'addCard' &&
        <AddCard
          deckId={ deck.id }
          goBack={ goBack }
        />)
      }
      { (screen === 'quiz' &&
        <Quiz
          goBack={ goBack }
        />)
      }
    </View>
  )
}

function mapStateToProps({ decks }, { route: { params: { id: deckId }}}) {
  return {
    deck: decks[deckId],
  }
}

export default connect(mapStateToProps, { removeDeck })(DeckDetailRouter)