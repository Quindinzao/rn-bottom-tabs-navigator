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

// Contexts
import { useAuth } from '../../contexts/Auth'

// Styles
import styles from './styles'

const SignIn: React.FC = () => {
  const navigation = useNavigation<propsStack>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()
  return (
    <View style={styles.container}>
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
      <PrimaryTouchable
        title="Sign In"
        onPress={() => signIn(email, password)}
        opacity={0.7}
      />
      <SecondaryTouchable
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
        opacity={0.7}
      />
    </View>
  )
}

export default SignIn
