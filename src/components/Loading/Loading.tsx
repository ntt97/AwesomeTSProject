import {View, ActivityIndicator} from 'react-native';
import React from 'react';

import {styles} from './LoadingStyles';
import Colors from '../../constants/colors';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.BLUE} />
    </View>
  );
};

export default LoadingScreen;
