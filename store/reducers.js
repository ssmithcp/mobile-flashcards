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
      [action.id]: {
        id: action.id,
        title: action.deckTitle,
        timestamp: action.timestamp,
        cards: [],
      },
    }
  case REMOVE_DECK:
    const stateCopy = { ... state }
    delete stateCopy[action.id]
    return stateCopy
  case ADD_CARD_TO_DECK:
    const newQuestion = {
      question: action.question,
      answer: action.answer,
    }

    return {
      ...state,
      [action.id]: {
        ...state[action.id],
        cards: state[action.id].cards.concat([ newQuestion ]),
      }
    }
  default:
    return state
  }
}