import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from '../pages/ListScreen';
import ProductScreen from '../pages/ProductScreen';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#312e38',
      },
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Auth.Screen name="Listas" component={ListScreen} />
    <Auth.Screen name="Produtos" component={ProductScreen} />
  </Auth.Navigator>
);

export default AuthRoutes;
