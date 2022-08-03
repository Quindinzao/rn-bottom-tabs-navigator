// External libraries
import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

interface PrimaryTouchableStyleProps {
  optionType: 'primary' | 'default'
}

export const TouchableContainer = styled.TouchableOpacity<PrimaryTouchableStyleProps>`
  width: 100%;
  align-items: center;
  justify-content: center;

  padding: ${props => (props.optionType !== 'primary' ? '16px' : '0px')};
  margin-bottom: 12px;

  background-color: ${props =>
    props.optionType === 'default' && props.theme.colors.backgroundColorItem};
  border-radius: 4px;
`

export const TouchableText = styled.Text<PrimaryTouchableStyleProps>`
  font-size: 15px;
  font-family: 'Nunito-ExtraBold';
  letter-spacing: 2.5px;
  color: ${props =>
    props.optionType === 'default'
      ? props.theme.colors.primary
      : props.theme.colors.backgroundColorItem};
`

const styles = StyleSheet.create({
  touchableContainer: {
    elevation: 5,
  },
  touchableColor: {
    width: '100%',
    padding: 16,
    borderRadius: 4,
  },
})

export default styles
