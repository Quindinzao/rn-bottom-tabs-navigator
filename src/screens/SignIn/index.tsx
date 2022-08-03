// External libraries
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'

// Components
import Input from '../../components/Input'
import PrimaryTouchable from '../../components/PrimaryTouchable'

// Routes
import { propsStack } from '../../routes/models'

// Contexts
import { useAuth } from '../../contexts/Auth'

// Styles
import { Container } from './styles'

const SignIn: React.FC = () => {
  const navigation = useNavigation<propsStack>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()
  return (
    <Container>
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
      <PrimaryTouchable
        title="Sign In"
        optionType="primary"
        onPress={() => signIn(email, password)}
        opacity={0.7}
      />
      <PrimaryTouchable
        title="Sign Up"
        optionType="default"
        onPress={() => navigation.navigate('SignUp')}
        opacity={0.7}
      />
    </Container>
  )
}

export default SignIn
