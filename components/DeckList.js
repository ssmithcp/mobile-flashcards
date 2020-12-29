import React from 'react'
import { connect } from 'react-redux'

import { FlatList } from 'react-native'

import DeckSummaryCard from './DeckSummaryCard'

function DeckList({ decks }) {
  console.log('sorted decks are: ', decks)

  const renderSummary = ({ item }) => <DeckSummaryCard id={ item.id } />

  return (
    <FlatList
      data={ decks }
      renderItem={ renderSummary }
      keyExtractor={ deck => deck.id }
    />
  )
}

function mapStateToProps({ decks }) {
  return {
    decks: Object.values(decks).sort((d0, d1) => d1.timestamp - d0.timestamp),
  }
}

export default connect(mapStateToProps)(DeckList)