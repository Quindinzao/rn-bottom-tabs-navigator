// External libraries
import React, { ReactNode } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

// Styles
import styles from './styles'
import dark from '../../styles/themes/dark'

interface PrimaryTouchableProps extends TouchableOpacityProps {
  children?: ReactNode
  title?: string
  opacity?: number
  onPress?: () => void
}

const PrimaryTouchable: React.FC<PrimaryTouchableProps> = ({
  children,
  title,
  opacity,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={opacity || 1}
      style={styles.button}
      onPress={onPress}>
      <LinearGradient
        style={styles.colorButton}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={[dark.colors.primary, dark.colors.secondary]}>
        {children}
        <Text style={styles.textButton}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default PrimaryTouchable
