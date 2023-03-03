import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FunctionComponent } from 'react';
import { Home } from '../pages/Home';

const App = createNativeStackNavigator();

export const AppRoutes: FunctionComponent = () => {
  return (
    <App.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <App.Screen name="SignIn" component={Home} />
    </App.Navigator>
  );
};
