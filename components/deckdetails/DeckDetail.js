import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'

import { CenteredContainer, H2 } from '../../helpers/ui'

function DeckDetail({ deck }) {
  return (
    <CenteredContainer>
      <H2>{ deck.title }</H2>
      <Text>
        { deck.cards.length } cards
      </Text>
    </CenteredContainer>
  )
}

export default connect()(DeckDetail)