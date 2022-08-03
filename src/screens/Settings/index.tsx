// External libraries
import React, { useContext } from 'react'
import { Switch, View } from 'react-native'

// Components
import PrimaryTouchable from '../../components/PrimaryTouchable'

// Contexts
import { useAuth } from '../../contexts/Auth'
import { ThemeContext, ThemeType } from '../../contexts/Theme'

// Styles
import { Container, Row, TextContainer } from './styles'

const Settings: React.FC = () => {
  const { signOut } = useAuth()
  const { theme, toggleTheme } = useContext(ThemeContext)

  const isLightMode = theme === ThemeType.lightTheme

  return (
    <Container>
      <View>
        <Row>
          <TextContainer>User: </TextContainer>
          <TextContainer>John Doe</TextContainer>
        </Row>
        <Row>
          <TextContainer>E-mail: </TextContainer>
          <TextContainer>johndoe@doe.com</TextContainer>
        </Row>
        <Row>
          <TextContainer>Mode: </TextContainer>
          <Switch
            value={isLightMode}
            onValueChange={toggleTheme}
            trackColor={{ false: '#121214', true: '#FFFFFF' }}
            thumbColor={'#FFB300'}
          />
        </Row>
      </View>

      <Row>
        <PrimaryTouchable
          title="Sign Out"
          optionType="default"
          onPress={signOut}
          opacity={0.7}
        />
      </Row>
    </Container>
  )
}

export default Settings
