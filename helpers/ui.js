import React from 'react'
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import Constants from 'expo-constants'

import styled from 'styled-components';

const Centered = styled.View`
  flex: 1;
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

const DefaultInput = styled.TextInput`
  width: 80%;
  font-size: 32px;
  border: 1px black solid;
  border-radius: 5px;
  margin-bottom: 20px;
`

export function TextInput({ children, ...rest }) {
  return (
    <DefaultInput { ...rest } >
      {children}
    </DefaultInput>
  )
}

const DefaultButton = styled.TouchableOpacity`
  padding: 20px 40px;
  border: 1px black solid;
  border-radius: 5px;
`

export function Button({ children, ...rest }) {
  return (
    <DefaultButton { ...rest }>
      { children }
    </DefaultButton>
  )
}