import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LOADING_SCREEN } from '@constants/screenKeys';
import LoadingScreen from '@components/loading/LoadingScreen';
import { AuthFlowScreens } from './initScreen';

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        {Object.entries(AuthFlowScreens).map(([name, component]) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'transparentModal', animation: 'fade' }}>
        <Stack.Screen
          name={LOADING_SCREEN}
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
