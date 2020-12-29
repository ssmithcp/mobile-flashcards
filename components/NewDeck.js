import React from 'react'
import { connect } from 'react-redux'

import { Text } from 'react-native'

import { newDeck } from '../store/actions'

import { CenteredContainer, H1, H2, TextInput, Button } from '../helpers/ui'
import { green } from '../helpers/colors'

function NewDeck({ newDeck, navigation }) {
  const [deckTitle, setDeckTitle] = React.useState('')

  const addDeckByTitle = () => {
    // XXX need to add promises!
    newDeck(deckTitle)
    setDeckTitle('')
    navigation.navigate('Decks')
  }

  return (
    <CenteredContainer>
      <H1>Add a new deck!</H1>
      <H2>Enter deck title:</H2>
      <TextInput
        onChangeText={ text => setDeckTitle(text) }
        value={ deckTitle }
        placeholder={ 'Deck title' }
        onSubmitEditing={ addDeckByTitle }
      />
      <Button
        style={ { backgroundColor: green } }
        disabled={ deckTitle === '' }
        onPress={ addDeckByTitle }
      >
        <Text style={ { fontSize: 20 } }>Add!</Text>
      </Button>
    </CenteredContainer>
  )
}

export default connect(null, { newDeck })(NewDeck)