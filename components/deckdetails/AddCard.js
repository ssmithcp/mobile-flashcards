import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'

import { newCard } from '../../store/actions'

import { CenteredContainer, H2, Button, TextInput } from '../../helpers/ui'
import { blue } from '../../helpers/colors'

function AddCard({ deckId, goBack, newCard }) {
  const [question, setQuestion] = React.useState('')
  const [answer, setAnswer] = React.useState('')

  const addCard = () =>
    newCard(deckId, question, answer)
      .then(goBack)

  return (
    <CenteredContainer>
      <H2>Question</H2>
      <TextInput
        onChangeText={ setQuestion }
        placeholder={ 'Opposite of up' }
        value={ question }
      />
      <H2>Answer</H2>
      <TextInput
        onChangeText={ setAnswer }
        placeholder={ 'Down' }
        value={ answer }
      />
      <Button
        disabled={ question === '' || answer === '' }
        onPress={ addCard }
        style={ { backgroundColor: blue } }
      >
        <Text>Submit</Text>
      </Button>
      <Button onPress={ goBack }>
        <Text>Cancel</Text>
      </Button>
    </CenteredContainer>
  )
}

export default connect(null, { newCard })(AddCard)