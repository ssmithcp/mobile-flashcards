import React from 'react'
import { Provider, connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import store from '../store'
import { getDecks } from '../helpers/storage'
import { receiveDecks } from '../store/actions'

import DeckTabDisplay from './DeckTabDisplay'
import DeckDetailRouter from './deckdetails/DeckDetailRouter'

const Stack = createStackNavigator();

function StackScreens({ receiveDecks }) {
  React.useEffect(() => { getDecks().then(receiveDecks) }, [])

  const toShortDeckName = name => {
    name = name || 'Deck detail'
    return name.length > 15
      ? name.slice(0, 15) + '...'
      : name
  }

  return (
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
  )
}

const ConnectedStackScreens = connect(null, { receiveDecks })(StackScreens)

function MainContainer() {
  return (
    <NavigationContainer>
      <Provider store={ store }>
        <ConnectedStackScreens />
      </Provider>
    </NavigationContainer>
  )
}

export default MainContainer