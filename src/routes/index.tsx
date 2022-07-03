// External libraries
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

// Routes
import AppStack from './stacks/app.routes'
import AuthStack from './stacks/auth.routes'

// Contexts
import { useAuth } from '../contexts/Auth'

const Routes: React.FC = () => {
  const { authData } = useAuth()
  // if (isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
  //     </View>
  //   )
  // }
  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Routes
