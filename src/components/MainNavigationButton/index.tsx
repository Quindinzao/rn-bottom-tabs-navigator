// External libraries
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useTheme } from 'styled-components/native'

// Styled
import styles from './styles'

const MainNavigationButton: React.FC = () => {
  const { colors } = useTheme()
  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      colors={[colors.primary, colors.secondary]}>
      <Ionicons name="ios-add" size={26} color="#FFF" />
    </LinearGradient>
  )
}

export default MainNavigationButton
