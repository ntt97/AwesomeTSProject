import { HOME_SCREEN, LOADING_SCREEN, LOGIN_SCREEN, SETTING_SCREEN } from '@constants/screenKeys';
import Colors from '@constants/colors';
import Images from '@constants/images';
import SettingScreen from '@screens/setting/SettingScreen';
import LoginScreen from '@screens/login/LoginScreen';
import LoadingScreen from '@components/loading/LoadingScreen';
import HomeScreen from '@screens/home/HomeScreen';

export const MainFlowScreens = {
  [HOME_SCREEN]: HomeScreen,
  [SETTING_SCREEN]: SettingScreen,
};

export const MainFlowModals = {};

export const AuthFlowScreens = {
  [LOGIN_SCREEN]: LoginScreen,
  [LOADING_SCREEN]: LoadingScreen,
};

export const AuthFlowModals = {};

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
