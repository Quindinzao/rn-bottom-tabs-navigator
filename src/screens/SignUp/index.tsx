// External libraries
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'

// Components
import PrimaryInput from '../../components/PrimaryInput'
import PrimaryTouchable from '../../components/PrimaryTouchable'
import SecondaryTouchable from '../../components/SecondaryTouchable'

// Routes
import { propsStack } from '../../routes/models'

// Styles
import styles from './styles'

const SignUp: React.FC = () => {
  const navigation = useNavigation<propsStack>()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // const handleSignUp = () => {
  //   if (password.length <= 7) {
  //     Alert.alert('Oops!', 'Password must be at least 8 characters')
  //   } else {
  //     navigation.navigate('TabRoutes')
  //   }
  // }

  return (
    <View style={styles.container}>
      <PrimaryInput
        value={username}
        onChangeText={(event: string) => setUsername(event)}
        placeholder="Username"
        keyboardType="default"
        autoCapitalize="words"
      />
      <PrimaryInput
        value={email}
        onChangeText={(event: string) => setEmail(event)}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <PrimaryInput
        value={password}
        onChangeText={(event: string) => setPassword(event)}
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry
      />
      <PrimaryInput
        value={confirmPassword}
        onChangeText={(event: string) => setConfirmPassword(event)}
        placeholder="Confirm password"
        autoCapitalize="none"
        secureTextEntry
      />
      <PrimaryTouchable
        title="Sign Up"
        // onPress={() => handleSignUp()}
        opacity={0.7}
      />
      <SecondaryTouchable
        title="Sign In"
        onPress={() => navigation.navigate('SignIn')}
        opacity={0.7}
      />
    </View>
  )
}

export default SignUp
