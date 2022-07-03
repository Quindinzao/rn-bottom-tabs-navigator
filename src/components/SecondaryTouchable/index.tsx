// External libraries
import React, { ReactNode } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

// Styles
import styles from './styles'

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
      {children}
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryTouchable
