export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const NEW_DECK = 'NEW_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function newDeck(deckTitle) {
  return {
    type: NEW_DECK,
    deckTitle,
  }
}

export function removeDeck(deckTitle) {
  return {
    type: NEW_DECK,
    deckTitle,
  }
}


export function newCard(deckTitle, question, answer) {
  return {
    type: ADD_CARD_TO_DECK,
    deckTitle,
    question,
    answer,
  }
}
