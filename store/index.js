import { createStore, combineReducers } from 'redux'

import reducers from './reducers'

const combined = combineReducers({
  decks: reducers,
})

export default createStore(combined)