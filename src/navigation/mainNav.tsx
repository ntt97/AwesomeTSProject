import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainFlowScreens, BottomTab } from './initScreen';
import styles from './styles';

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
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={
              isFocused ? styles.containerActive : styles.containerInactive
            }>
            <Image source={route.params.iconTab} style={styles.iconImage} />
            <Text style={{ color: route.params.colorTitle, paddingTop: 10 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const tabStackScreen = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      {BottomTab.map(({ title, component, iconTab, colorTitle }) => (
        <Tab.Screen
          key={title}
          name={title}
          component={component}
          initialParams={{ iconTab, colorTitle }}
        />
      ))}
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen name={'mainBottomTab'} component={tabStackScreen} />
      {Object.entries(MainFlowScreens).map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
};

export default MainNavigator;
