import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import store from '../store'

import DeckTabDisplay from './DeckTabDisplay'
import DeckDetailRouter from './deckdetails/DeckDetailRouter'

function toShortDeckName(name) {
  name = name || 'Deck detail'
  return name.length > 15
    ? name.slice(0, 15) + '...'
    : name
}

const Stack = createStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Provider store={ store }>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={ DeckTabDisplay }
            options={ {headerMode: 'none', headerShown : false} }
          />
          <Stack.Screen
            name='DeckDetail'
            options={({ route }) => ({ title: toShortDeckName(route.params.title) }) }
            component={ DeckDetailRouter } />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

export default MainContainer