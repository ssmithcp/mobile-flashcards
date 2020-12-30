import React from 'react'
import { connect } from 'react-redux'

import { Text, Animated } from 'react-native'

import { Card, Centered, H2 } from '../helpers/ui'
import { gray } from '../helpers/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

function DeckSummaryCard({ deck }) {
  const [ animationOpacity ] = React.useState(new Animated.Value(0))

  React.useEffect(
    () => {
        Animated.timing(animationOpacity, {
          toValue: 1,
          duration: 1250,
         useNativeDriver: true,
      }).start() },
    [animationOpacity])


  const goToDeckDetails = () => {
    console.log('going to details!')
  }

  return (
    <TouchableOpacity onPress={ goToDeckDetails }>
      <Card onPress={ goToDeckDetails } style={ { opacity: animationOpacity } }>
        <Centered>
          <H2>{ deck.title }</H2>
          <Text
            style={ { color: gray, fontSize: 24 } }
          >
            { deck.cards.length } cards
          </Text>
        </Centered>
      </Card>
    </TouchableOpacity>
  )
}

function mapStateToProps({ decks }, { id }) {
  return {
    deck: decks[id],
  }
}

export default connect(mapStateToProps)(DeckSummaryCard)