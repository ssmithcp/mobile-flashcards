import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import reducers from './reducers'

const combined = combineReducers({
  decks: reducers,
})

const middleware = applyMiddleware(thunk)

export default createStore(combined, middleware)