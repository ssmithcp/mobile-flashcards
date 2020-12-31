export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const NEW_DECK = 'NEW_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

import { saveDeck, saveCard, deleteDeck } from '../helpers/storage'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function newDeck(deckTitle) {
  return dispatch => saveDeck(deckTitle)
    .then(({id, timestamp}) => {
      dispatch({
        type: NEW_DECK,
        id,
        timestamp,
        deckTitle,
      })
      return id
    })
}

export function removeDeck(id) {
  return dispatch => deleteDeck(id)
    .then(() =>
      dispatch({
        type: REMOVE_DECK,
        id,
      })
    )
}

export function newCard(deckId, question, answer) {
  return dispatch => saveCard(deckId, question, answer)
    .then(() =>
      dispatch({
        type: ADD_CARD_TO_DECK,
        id: deckId,
        question,
        answer,
      })
    )
}
