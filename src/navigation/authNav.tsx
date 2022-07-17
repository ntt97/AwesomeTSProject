import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthFlowScreens} from './initScreen';
import {LOADING_SCREEN} from '../constants/screenKeys';
import LoadingScreen from '../components/Loading/Loading';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{gestureEnabled: false}}>
      {Object.entries(AuthFlowScreens).map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
      <Stack.Screen
        options={{}}
        name={LOADING_SCREEN}
        component={LoadingScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
