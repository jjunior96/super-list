import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import AddItem from '../pages/AddItem';
import { Platform } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabsRoutes() {
  const theme = useTheme();

  return (
    <Navigator 
      screenOptions={
        { 
          headerShown: false,
          tabBarActiveTintColor: theme.colors.sucess,
          tabBarInactiveTintColor: theme.colors.text,
          tabBarLabelPosition: 'beside-icon',
          tabBarStyle: {
            paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            height: 100,
            backgroundColor: theme.colors.primary
          },
          tabBarLabelStyle: {
            fontSize: 18,
          },
        }
      } 
    >
      <Screen 
        name="Lista"
        component={Home}
        options={{
          tabBarIcon: (({ size, color}) => (
            <FontAwesome name="list-ul" size={size} color={color} />
          ))
        }}
      />

      <Screen 
        name="Add Item"
        component={AddItem}
        options={{
          tabBarIcon: (({ size, color}) => (
            <FontAwesome name="plus" size={size} color={color} />
          ))
        }}
      />

      <Screen 
        name="Carrinho"
        component={Cart}
        options={{
          tabBarIcon: (({ size, color}) => (
            <FontAwesome name="shopping-cart" size={size} color={color} />
          ))
        }}
      />

    </Navigator>
  )
}