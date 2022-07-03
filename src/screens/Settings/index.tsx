// External libraries
import React from 'react'
import { Text, View } from 'react-native'

// Components
import SecondaryTouchable from '../../components/SecondaryTouchable'

// Contexts
import { useAuth } from '../../contexts/Auth'

// Styles
import styles from './styles'

const Settings: React.FC = () => {
  const { signOut } = useAuth()
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Settings</Text>
      <SecondaryTouchable title="Sign Out" onPress={signOut} opacity={0.7} />
    </View>
  )
}

export default Settings
