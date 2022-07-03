// External libraries
import { StyleSheet } from 'react-native'

// Styled
import dark from '../../styles/themes/dark'

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',

    padding: 12.5,
    marginBottom: 12,

    borderRadius: 4,
    backgroundColor: dark.colors.backgroundColorTab,
    elevation: 5,

    color: dark.colors.text,
  },
})

export default styles
