// External libraries
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'

// Components
import Input from '../../components/Input'
import PrimaryTouchable from '../../components/PrimaryTouchable'

// Routes
import { propsStack } from '../../routes/models'

// Styles
import { Container } from './styles'

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
    <Container>
      <Input
        value={username}
        onChangeText={(event: string) => setUsername(event)}
        placeholder="Username"
        keyboardType="default"
        autoCapitalize="words"
      />
      <Input
        value={email}
        onChangeText={(event: string) => setEmail(event)}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        value={password}
        onChangeText={(event: string) => setPassword(event)}
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry
      />
      <Input
        value={confirmPassword}
        onChangeText={(event: string) => setConfirmPassword(event)}
        placeholder="Confirm password"
        autoCapitalize="none"
        secureTextEntry
      />
      <PrimaryTouchable
        title="Sign Up"
        optionType="primary"
        // onPress={() => handleSignUp()}
        opacity={0.7}
      />
      <PrimaryTouchable
        title="Sign In"
        optionType="default"
        onPress={() => navigation.navigate('SignIn')}
        opacity={0.7}
      />
    </Container>
  )
}

export default SignUp
