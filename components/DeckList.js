import React from 'react'
import { connect } from 'react-redux'

import { View } from 'react-native'

import { H2 } from '../helpers/ui'

function DeckList({ decks }) {
  console.log('ordered decks are:', decks)

  return (
    <View>
      { decks.map(deck => (
          <H2 key={ deck.timestamp }>{ deck.title }</H2>
      ))}
    </View>
  )
}

function mapStateToProps({ decks }) {
  return {
    decks: Object.values(decks).sort((d0, d1) => d1.timestamp - d0.timestamp),
  }
}

export default connect(mapStateToProps)(DeckList)