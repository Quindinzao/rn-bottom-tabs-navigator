// External libraries
import React, { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from 'styled-components/native'

// Styles
import styles, { TouchableContainer, TouchableText } from './styles'

interface PrimaryTouchableProps extends TouchableOpacityProps {
  children?: ReactNode
  title: string
  optionType: 'primary' | 'default'
  opacity?: number
  onPress?: () => void
}

const PrimaryTouchable: React.FC<PrimaryTouchableProps> = ({
  children,
  title,
  optionType,
  opacity,
  onPress,
}) => {
  const { colors } = useTheme()
  return (
    <TouchableContainer
      optionType={optionType}
      activeOpacity={opacity || 1}
      style={styles.touchableContainer}
      onPress={onPress}>
      {optionType === 'primary' ? (
        <LinearGradient
          style={styles.touchableColor}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={[colors.primary, colors.secondary]}>
          {children}
          <TouchableText optionType={optionType}>{title}</TouchableText>
        </LinearGradient>
      ) : (
        <TouchableText optionType={optionType}>{title}</TouchableText>
      )}
    </TouchableContainer>
  )
}

export default PrimaryTouchable
