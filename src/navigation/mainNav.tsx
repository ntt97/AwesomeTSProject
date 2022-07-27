import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainFlowScreens, BottomTab } from './initScreen';
import styles from './styles';
import { BOTTOM_TAB, LOADING_SCREEN } from '@constants/screenKeys';
import LoadingScreen from '../components/Loading/Loading';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MyTabBar = ({ state, descriptors, navigation }: any) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={isFocused ? styles.containerActive : styles.containerInactive}
          >
            <Image source={route.params.iconTab} style={styles.iconImage} />
            <Text style={{ color: route.params.colorTitle, paddingTop: 10 }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabStackScreen = () => {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      {BottomTab.map(({ title, component, iconTab, colorTitle }) => (
        <Tab.Screen
          key={title}
          name={title}
          component={component}
          initialParams={{ iconTab, colorTitle }}
          options={{ headerShown: false }}
        />
      ))}
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          options={{ headerShown: false }}
          name={BOTTOM_TAB}
          component={TabStackScreen}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'transparentModal', animation: 'fade' }}>
        <Stack.Screen
          name={LOADING_SCREEN}
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
      <Stack.Group>
        {Object.entries(MainFlowScreens).map(([name, component]) => (
          <Stack.Screen
            options={{ headerShown: false }}
            key={name}
            name={name}
            component={component}
          />
        ))}
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainNavigator;
