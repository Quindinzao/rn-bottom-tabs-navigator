// External libraries
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;

  padding: 0px;

  background-color: ${props => props.theme.colors.backgroundColor};
`

export const Row = styled.View`
  width: 100%;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  margin-top: 24px;
  padding-bottom: 10px;
  padding-right: 24px;
  padding-left: 24px;
`

export const TextContainer = styled.Text`
  font-size: 16px;
  font-family: 'Nunito-Medium';
  letter-spacing: 2.5px;
  color: ${props => props.theme.colors.text};
`
