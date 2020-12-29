import { RECEIVE_DECKS, NEW_DECK, ADD_CARD_TO_DECK, REMOVE_DECK } from './actions'

export default function decks(state = {}, action) {
  switch (action.type) {
  case RECEIVE_DECKS:
    return {
      ...state,
      ...action.decks,
    }
  case NEW_DECK:
    return {
      ...state,
      [action.deckTitle]: {
        title: action.deckTitle,
        cards: [],
      },
    }
  case REMOVE_DECK:
    const stateCopy = { ... state }
    delete stateCopy[action.deckTitle]
    return stateCopy
  case ADD_CARD_TO_DECK:
    const newQuestion = {
      question: action.question,
      answer: action.answer,
    }

    return {
      ...state,
      [action.deckTitle]: {
        title: action.deckTitle,
        cards: state[action.deckTitle].cards.concat([ newQuestion ]),
      }
    }
  default:
    return state
  }
}