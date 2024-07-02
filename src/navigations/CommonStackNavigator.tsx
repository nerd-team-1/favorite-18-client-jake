import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import {commonNavigations} from '../constants';

export type CommonStackParamList = {
  [commonNavigations.HOME]: undefined;
  [commonNavigations.LOGIN]: undefined;
};

function CommonStackNavigator() {
  const Stack = createStackNavigator<CommonStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name={commonNavigations.HOME} component={HomeScreen} />
      <Stack.Screen name={commonNavigations.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default CommonStackNavigator;
