// External libraries
import React from 'react'
import { KeyboardTypeOptions, TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

// Styled
import styles, { InputContainer } from './styles'

interface InputProps extends TextInputProps {
  value?: string
  onChangeText?: (event: string) => void
  placeholder?: string
  keyboardType?: KeyboardTypeOptions
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  focusable?: boolean
  secureTextEntry?: boolean
}

const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  autoCapitalize,
  focusable,
  secureTextEntry,
}) => {
  const { colors } = useTheme()
  return (
    <InputContainer
      style={styles.inputContainer}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.default}
      keyboardType={keyboardType ? keyboardType : 'default'}
      autoCapitalize={autoCapitalize ? autoCapitalize : 'sentences'}
      focusable={focusable}
      secureTextEntry={secureTextEntry}
    />
  )
}

export default Input
