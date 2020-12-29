import React from 'react'
import { connect } from 'react-redux'

import { Text } from 'react-native'

import { Card, Centered, H2 } from '../helpers/ui'
import { gray } from '../helpers/colors'

function DeckSummaryCard({ deck }) {
  return (
    <Card>
      <Centered>
        <H2>{ deck.title }</H2>
        <Text
          style={ { color: gray, fontSize: 24 } }
        >
          { deck.cards.length } cards
        </Text>
      </Centered>
    </Card>
  )
}

function mapStateToProps({ decks }, { id }) {
  console.log('got id: ', id)
  return {
    deck: decks[id],
  }
}

export default connect(mapStateToProps)(DeckSummaryCard)