import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import DeckList from './DeckList'
import NewDeck from './NewDeck'

const Tab = createMaterialTopTabNavigator();

function DeckTabDisplay() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Decks"
        children={ () => <DeckList /> }
      />
      <Tab.Screen
        name="New Deck"
        children={ () => <NewDeck /> }
      />
    </Tab.Navigator>
  )
}

export default DeckTabDisplay