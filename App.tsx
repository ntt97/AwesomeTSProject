import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from '@navigation/mainNav';

import { reduxProvider } from '@store/configureStore';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default reduxProvider(App);
