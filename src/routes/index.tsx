import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from '../pages/ListScreen';
import ProductScreen from '../pages/ProductScreen';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Auth.Screen name="ListScreen" component={ListScreen} />
    <Auth.Screen name="ProductScreen" component={ProductScreen} />
  </Auth.Navigator>
);

export default AuthRoutes;
