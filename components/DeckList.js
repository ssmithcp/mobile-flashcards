import React from 'react'
import { connect } from 'react-redux'

import { FlatList } from 'react-native'

import DeckSummaryCard from './DeckSummaryCard'

class DeckList extends React.Component {
  scrolledDecks = {}

  getDeckIdParam() {
    const { route: { params } } = this.props
    return params
      ? params.newDeckId
      : null
  }

  componentDidUpdate() {
    const newDeckId = this.getDeckIdParam()
    const { decks } = this.props

    if (newDeckId && !this.scrolledDecks[newDeckId]) {
      let scrollToIndex = -1

      for (let ctr = 0; ctr < decks.length; ++ctr) {
        const deck = decks[ctr]

        if (deck.id === newDeckId) {
          scrollToIndex = ctr;
          break;
        }
      }

      if (scrollToIndex > -1) {
        console.log('scrolling to index: ', scrollToIndex)
        this.scrolledDecks[newDeckId] = true;
        this.flatListRef.scrollToOffset({ animated: true, offset: scrollToIndex })
      }
    }
  }

  render() {
    const { decks, navigation } = this.props
    const newDeckId = this.getDeckIdParam()

    const renderSummary = ({ item }) => <DeckSummaryCard id={ item.id } navigation={ navigation } />

    return (
      <FlatList
        ref={ref => { this.flatListRef = ref }}
        data={ decks }
        renderItem={ renderSummary }
        keyExtractor={ deck => deck.id }
      />
    )
  }
}

function mapStateToProps({ decks }) {
  return {
    decks: Object.values(decks).sort((d0, d1) => d1.timestamp - d0.timestamp),
  }
}

export default connect(mapStateToProps)(DeckList)