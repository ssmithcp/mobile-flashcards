import React from 'react'
import { connect } from 'react-redux'

import { Text } from 'react-native'

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
`;

function NewDeck() {
  return (
    <Container style={ { flex: 1 } }>
      <Text>Add a new deck!</Text>
      <Button>
        Add Deck!
      </Button>
    </Container>
  )
}

export default connect()(NewDeck)