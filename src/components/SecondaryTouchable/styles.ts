// External libraries
import { StyleSheet } from 'react-native'

// Styled
import dark from '../../styles/themes/dark'

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',

    padding: 16,
    marginBottom: 12,

    backgroundColor: dark.colors.backgroundColorTab,
    borderRadius: 4,

    elevation: 5,
  },
  textButton: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 2.5,
    color: dark.colors.primary,
  },
})

export default styles
