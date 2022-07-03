// External libraries
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import List from '../../screens/List'
import Edit from '../../screens/Edit'
import Add from '../../screens/Add'
import Search from '../../screens/Search'
import Settings from '../../screens/Settings'

// Components
import MainNavigationButton from '../../components/MainNavigationButton'

// Styled
import dark from '../../styles/themes/dark'

const { Navigator, Screen } = createBottomTabNavigator()

const TabRoutes: React.FC = () => {
  return (
    <Navigator
      initialRouteName="List"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: dark.colors.primary,
        tabBarInactiveTintColor: dark.colors.default,
        tabBarStyle: {
          height: 56,
          backgroundColor: dark.colors.backgroundColorTab,
          borderTopWidth: 0,
        },
      }}>
      <Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: () => <MainNavigationButton />,
        }}
      />
      <Screen
        name="Edit"
        component={Edit}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="create-outline" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  )
}

export default TabRoutes
