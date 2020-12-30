export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const NEW_DECK = 'NEW_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

import { saveDeck } from '../helpers/storage'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function newDeck(deckTitle) {
  return dispatch => saveDeck(deckTitle)
    .then(id => {
      dispatch({
        type: NEW_DECK,
        id,
        deckTitle,
      })
      return id
    })
}

export function removeDeck(id) {
  return {
    type: NEW_DECK,
    id,
  }
}


export function newCard(deckId, question, answer) {
  return {
    type: ADD_CARD_TO_DECK,
    id: deckId,
    question,
    answer,
  }
}
