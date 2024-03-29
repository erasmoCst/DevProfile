import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FunctionComponent } from 'react';
import { Home } from '../pages/Home';
import { UserDetails } from '../pages/UserDetails';
import { UserProfile } from '../pages/UserProfile';
import { UserProfileEdit } from '../pages/UserProfileEdit';
import { UserProfilePassword } from '../pages/UserProfilePassword';

const App = createNativeStackNavigator();

export const AppRoutes: FunctionComponent = () => {
  return (
    <App.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <App.Screen name="Home" component={Home} />
      <App.Screen name="UserDetails" component={UserDetails} />
      <App.Screen name="UserProfile" component={UserProfile} />
      <App.Screen name="UserProfileEdit" component={UserProfileEdit} />
      <App.Screen name="UserProfilePassword" component={UserProfilePassword} />
    </App.Navigator>
  );
};
