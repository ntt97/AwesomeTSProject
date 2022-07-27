import React, { useEffect, type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../reducers/BaseReducer';
import NavigationActionsService from '../../navigation/baseNavigation';
import styles from './HomeScreenStyles';
import { RootState } from '../../store/configureStore';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const App = (props) => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.users.value);

  useEffect(() => {
    NavigationActionsService.initInstance(props.navigation);
  }, []);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Section title={'Home Screen' + todoList} />
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(increment());
            // NavigationActionsService.showLoading();
            // setTimeout(() => {
            //   NavigationActionsService.hideLoading();
            // }, 500);
          }}
        >
          <Text>sssss</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
