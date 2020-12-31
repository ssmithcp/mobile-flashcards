import React from 'react'
import { connect } from 'react-redux'
import { Text, Alert } from 'react-native'

import { CenteredContainer, H2, Button, CardCountText } from '../../helpers/ui'
import { green, red, blue } from '../../helpers/colors'

function DeckDetail({ deck, addCard, startQuiz, deleteDeck }) {
  return (
    <CenteredContainer>
      <H2>{ deck.title }</H2>
      <CardCountText>
        { deck.cards.length } cards
      </CardCountText>
      <Button
        style={ { backgroundColor: blue } }
        onPress={ startQuiz }
        disabled={ deck.cards.length === 0 }
      >
        <Text>Start quiz!</Text>
      </Button>
      <Button style={ { backgroundColor: green } } onPress={ addCard }>
        <Text>Add card</Text>
      </Button>
      <Button
        style={ { backgroundColor: red } }
        onPress={() => {
          Alert.alert(
            'Delete deck',
            `Delete ${ deck.title }?`,
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              {
                text: "OK",
                onPress: deleteDeck }
            ],
            { cancelable: false }
          );
        }}
      >
        <Text>Delete deck</Text>
      </Button>
    </CenteredContainer>
  )
}

export default connect()(DeckDetail)