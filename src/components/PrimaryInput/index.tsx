// External libraries
import React from 'react'
import { KeyboardTypeOptions, TextInput, TextInputProps } from 'react-native'

// Styled
import styles from './styles'
import dark from '../../styles/themes/dark'

interface PrimaryInputProps extends TextInputProps {
  value?: string
  onChangeText?: (event: string) => void
  placeholder?: string
  keyboardType?: KeyboardTypeOptions
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  focusable?: boolean
  secureTextEntry?: boolean
}

const PrimaryInput: React.FC<PrimaryInputProps> = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  autoCapitalize,
  focusable,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={styles.inputContainer}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={dark.colors.default}
      keyboardType={keyboardType ? keyboardType : 'default'}
      autoCapitalize={autoCapitalize ? autoCapitalize : 'sentences'}
      focusable={focusable}
      secureTextEntry={secureTextEntry}
    />
  )
}

export default PrimaryInput
