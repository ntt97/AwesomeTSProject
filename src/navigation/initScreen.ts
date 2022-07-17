import {
  HOME_SCREEN,
  LOADING_SCREEN,
  LOGIN_SCREEN,
  SETTING_SCREEN,
} from '../constants/screenKeys';

import LoadingScreen from '../components/Loading/Loading';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SettingScreen from '../screens/SettingScreen/SettingScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import Colors from '../constants/colors';
import Images from '../constants/images';

export const MainFlowScreens = {
  [HOME_SCREEN]: HomeScreen,
  [SETTING_SCREEN]: SettingScreen,
  [LOADING_SCREEN]: LoadingScreen,
};

export const AuthFlowScreens = {
  [LOGIN_SCREEN]: LoginScreen,
  [LOADING_SCREEN]: LoadingScreen,
};

export const BottomTab = [
  {
    title: 'Home',
    component: HomeScreen,
    iconTab: Images.ICON_SCHEDULE,
    colorTitle: Colors.RED,
  },
  {
    title: 'Setting',
    component: SettingScreen,
    iconTab: Images.ICON_SETTING,
    colorTitle: Colors.RED,
  },
];
