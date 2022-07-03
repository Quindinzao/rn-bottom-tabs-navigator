// External libraries
import { StyleSheet } from 'react-native'

// Styled
import dark from '../../styles/themes/dark'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTabRound: {
    width: 55,
    height: 55,

    borderRadius: 27.5,
    marginBottom: 25,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 6,
    shadowColor: dark.colors.secondary,
    shadowOffset: { width: 60, height: 60 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
})

export default styles
