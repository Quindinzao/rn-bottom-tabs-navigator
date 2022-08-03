// External libraries
import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const InputContainer = styled.TextInput`
  width: 100%;

  padding: 12.5px;
  margin-bottom: 12px;

  border-radius: 4px;
  background-color: ${props => props.theme.colors.backgroundColorItem};

  color: ${props => props.theme.colors.text};
`

const styles = StyleSheet.create({
  inputContainer: {
    elevation: 5,
  },
})

export default styles
