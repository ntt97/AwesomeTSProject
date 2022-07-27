import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import Colors from '@constants/colors';
import { styles } from './LoadingStyles';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.BLUE} />
    </View>
  );
};

export default LoadingScreen;
