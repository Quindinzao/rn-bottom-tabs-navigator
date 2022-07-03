// External libraries
import { StyleSheet } from 'react-native'

// Styled
import dark from '../../styles/themes/dark'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    padding: 24,

    backgroundColor: dark.colors.backgroundColor,
  },
  textContainer: {
    fontSize: 18,
    fontWeight: '700',
  },
})

export default styles
