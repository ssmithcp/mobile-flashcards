import React from 'react'
import { Text, View } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { red, green } from '../../helpers/colors'

import { CenteredContainer, H2, H3, Button } from '../../helpers/ui'

function ShowableAnswer({ answer }) {
  const [show, setShow] = React.useState(false)

  return (
    <TouchableOpacity
      onPress={ () => setShow(!show) }
      style={ { marginBottom: 42 } }
    >
      { show && (<Text style={ { color: green, fontSize: 24, } }>{answer}</Text>) }
      { !show && (<Text style={ { color: red, fontSize: 24, } }>Answer</Text>) }
    </TouchableOpacity>
  )
}

function Quiz({ deck, goBack }) {
  const [questionsAnswered, setQuestionsAnswered] = React.useState(0)
  const [correctAnswers, setCorrectAnswers] = React.useState(0)

  const currentCard = deck.cards[questionsAnswered];

  return (
    <CenteredContainer>
      { questionsAnswered === deck.cards.length && (
        <H3 style={ { color: green, fontSize: 24, } }>
          You got { correctAnswers } / { deck.cards.length } correct!
        </H3>
      )}
      { questionsAnswered < deck.cards.length && (
        <>
          <H3>Answering question { questionsAnswered } / { deck.cards.length }</H3>
          <H2>{ currentCard.question }?</H2>
          <ShowableAnswer answer={ currentCard.answer } />
          <Button
            onPress={() => {
              setCorrectAnswers(correctAnswers + 1)
              setQuestionsAnswered(questionsAnswered + 1)
            }}
          >
            <Text style={ { color: green, fontSize: 24, } }>
              Correct
            </Text>
          </Button>
          <Button
            onPress={() => {
              setQuestionsAnswered(questionsAnswered + 1)
            }}
          >
            <Text style={ { color: red, fontSize: 24, } }>
              Incorrect
            </Text>
          </Button>
        </>
      )}
      <Button onPress={ goBack }>
        <Text>Quit</Text>
      </Button>
    </CenteredContainer>
  )
}

export default Quiz