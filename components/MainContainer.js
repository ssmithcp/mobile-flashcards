import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import store from '../state'
import DeckTabDisplay from './DeckTabDisplay'

function MainContainer() {
  return (
    <NavigationContainer>
      <Provider store={ store }>
        <DeckTabDisplay />
      </Provider>
    </NavigationContainer>
  )
}

export default MainContainer