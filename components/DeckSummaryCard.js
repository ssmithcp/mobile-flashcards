import React from 'react'
import { connect } from 'react-redux'

import { Text, View } from 'react-native'

function DeckSummaryCard({ deck }) {
  return (
    <View>
      <Text>{ deck.title }</Text>
    </View>
  )
}

function mapStateToProps({ decks }, { id }) {
  return {
    deck: decks[id],
  }
}

export default connect(mapStateToProps)(DeckSummaryCard)