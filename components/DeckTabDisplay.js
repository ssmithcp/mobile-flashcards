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
        component={ DeckList }
      />
      <Tab.Screen
        name="New Deck"
        component={ NewDeck }
      />
    </Tab.Navigator>
  )
}

export default DeckTabDisplay