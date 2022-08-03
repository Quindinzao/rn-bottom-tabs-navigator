// External libraries
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background-color: ${props => props.theme.colors.backgroundColor};
`
