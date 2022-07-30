import { View, ActivityIndicator } from 'react-native';
import React from 'react';

import Colors from '@constants/colors';
import { styles } from './LoadingScreenStyles';

function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.BLUE} />
    </View>
  );
}

export default LoadingScreen;
