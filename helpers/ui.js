import React from 'react'
import { ScrollView } from 'react-native';

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
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <Centered style={ { marginTop: -(toolBarHeight) }}>
        { children }
      </Centered>
    </ScrollView>
  )
}

export const H1 = styled.Text`
  font-size: 40px;
  margin-bottom: 30px;
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

export function TextInput ({ children, ...rest }){
  return (
    <DefaultInput { ...rest } >
      {children}
    </DefaultInput>
  )
}

