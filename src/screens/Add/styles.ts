// External libraries
import { StyleSheet } from 'react-native'

// Styled
import dark from '../../styles/themes/dark'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    padding: 24,

    backgroundColor: dark.colors.backgroundColor,
  },
  textContainer: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 2.5,
    color: dark.colors.primary,
  },
})

export default styles
