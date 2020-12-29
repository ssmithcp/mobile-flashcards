import React from 'react'
import { connect } from 'react-redux'

import { Text } from 'react-native'

import { CenteredContainer, H1, H2, TextInput } from '../helpers/ui'
import { TouchableOpacity } from 'react-native-gesture-handler';

function NewDeck() {
  return (
    <CenteredContainer>
      <H1>Add a new deck!</H1>
      <H2>Enter deck title:</H2>
      <TextInput />
      <TouchableOpacity>
        <Text>Add!</Text>
      </TouchableOpacity>
    </CenteredContainer>
  )
}

export default connect()(NewDeck)