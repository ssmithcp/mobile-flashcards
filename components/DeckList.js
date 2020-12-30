import React from 'react'
import { connect } from 'react-redux'

import { FlatList } from 'react-native'

import DeckSummaryCard from './DeckSummaryCard'

class DeckList extends React.Component {
  state = {
    knownDecks: [],
  }

  componentDidUpdate() {
    const { decks, route: { params } } = this.props
    console.log('will update decks: ', decks)
    console.log('will update params: ', params)

    if (params && params.scrollToDeck) {
      let scrollToIndex = -1

      for (let ctr = 0; ctr < decks.length; ++ctr) {
        const deck = decks[ctr]

        if (deck.id === params.scrollToDeck) {
          scrollToIndex = ctr;
          break;
        }
      }

      if (scrollToIndex > -1) {
        console.log('scrolling to index: ', scrollToIndex)
        this.flatListRef.scrollToOffset({ animated: true, offset: scrollToIndex })
      }
    }
  }


  render() {
    const { decks } = this.props
    const renderSummary = ({ item }) => <DeckSummaryCard id={ item.id } />

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