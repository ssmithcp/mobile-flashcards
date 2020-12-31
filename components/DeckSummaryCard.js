import React from 'react'
import { connect } from 'react-redux'

import { Animated } from 'react-native'

import { Card, Centered, H2, CardCountText, AnimationDuration } from '../helpers/ui'
import { TouchableOpacity } from 'react-native-gesture-handler'

function DeckSummaryCard({ deck, navigation }) {
  const [ animationOpacity ] = React.useState(new Animated.Value(0))

  React.useEffect(
    () => {
        Animated.timing(animationOpacity, {
          toValue: 1,
          duration: AnimationDuration,
         useNativeDriver: true,
      }).start() },
    [animationOpacity])


  const goToDeckDetails = () => {
    navigation.navigate('DeckDetail', {
      id: deck.id,
      title: deck.title,
    })
  }

  return (
    <TouchableOpacity onPress={ goToDeckDetails }>
      <Card onPress={ goToDeckDetails } style={ { opacity: animationOpacity } }>
        <Centered>
          <H2>{ deck.title }</H2>
          <CardCountText>
            { deck.cards.length } cards
          </CardCountText>
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