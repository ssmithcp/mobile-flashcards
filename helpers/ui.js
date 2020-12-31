import React from 'react'
import { ScrollView, KeyboardAvoidingView, Platform, StyleSheet, Animated } from 'react-native';

import Constants from 'expo-constants'

import styled from 'styled-components';

import { white } from './colors'

export const AnimationDuration = 1250

export const Centered = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export function CenteredContainer({ children }) {
  // an improvment would be to include the tab bar height too
  const toolBarHeight = Constants.statusBarHeight;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={ { flex: 1, marginTop: -(toolBarHeight) }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <Centered>
          { children }
        </Centered>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export const H1 = styled.Text`
  font-size: 40px;
  margin-bottom: 20px;
`

export const H2 = styled.Text`
  font-size: 32px;
  margin-bottom: 24px;
`

export const H3 = styled.Text`
  font-size: 24px;
  margin-bottom: 30px;
`

export const CardCountText = styled.Text`
  font-size: 24px;
  color: #757575;
  margin-bottom: 18px;
`

const DefaultInput = styled.TextInput`
  width: 80%;
  font-size: 32px;
  border: 1px black solid;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 10px;
`

export function TextInput({ children, ...rest }) {
  return (
    <DefaultInput autoCorrect={ false } { ...rest } >
      {children}
    </DefaultInput>
  )
}

const DefaultButton = styled.TouchableOpacity`
  padding: 20px 40px;
  border: 1px black solid;
  border-radius: 5px;
  margin-bottom: 15px;
`

export function Button({ children, ...rest }) {
  return (
    <DefaultButton { ...rest }>
      { children }
    </DefaultButton>
  )
}

const styles = StyleSheet.create({
  shadowBox: {
    backgroundColor: white,
    borderRadius: 16,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
})

export function Card({ children, style, ...rest }) {
  return (
    <Animated.View style={ [styles.shadowBox, style] } { ...rest }>
      { children }
    </Animated.View>
  )
}