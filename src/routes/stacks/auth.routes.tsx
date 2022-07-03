// External libraries
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import SignIn from '../../screens/SignIn'
import SignUp from '../../screens/SignUp'

// Routes
import { propsNavigationStack } from '../models'

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

const AuthStack: React.FC = () => {
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  )
}

export default AuthStack
