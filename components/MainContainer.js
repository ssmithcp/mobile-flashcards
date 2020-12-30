import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import store from '../store'

import DeckTabDisplay from './DeckTabDisplay'
import DeckDetail from './DeckDetail'

const Stack = createStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Provider store={ store }>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ DeckTabDisplay } />
          <Stack.Screen name="Detail" component={ DeckDetail } />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

export default MainContainer