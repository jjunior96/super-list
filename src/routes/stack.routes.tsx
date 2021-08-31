import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import AddItem from '../pages/AddItem';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} >
      <Screen 
        name="Home"
        component={Home}
      />

      <Screen 
        name="Cart"
        component={Cart}
      />

      <Screen 
        name="AddItem"
        component={AddItem}
      />
    </Navigator>
  )
}