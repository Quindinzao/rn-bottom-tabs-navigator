// External libraries
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'

// Styled
import styles from './styles'
import dark from '../../styles/themes/dark'

const MainNavigationButton: React.FC = () => {
  return (
    <LinearGradient
      style={styles.iconTabRound}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      colors={[dark.colors.primary, dark.colors.secondary]}>
      <Ionicons name="ios-add" size={26} color="#FFF" />
    </LinearGradient>
  )
}

export default MainNavigationButton
