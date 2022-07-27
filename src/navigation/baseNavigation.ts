import { LOADING_SCREEN, ALERT_POPUP } from '../constants/screenKeys';
import { Keyboard } from 'react-native';
import { StackActions } from '@react-navigation/native';

class NavigationActionsService {
  private static stackNavigation: any[] = [];
  static navigation: any;
  private static instance: NavigationActionsService;
  static initInstance(navigation: any): NavigationActionsService {
    if (!NavigationActionsService.instance) {
      NavigationActionsService.instance = new NavigationActionsService();
    }
    NavigationActionsService.navigation = navigation;
    NavigationActionsService.stackNavigation.push(navigation);
    return NavigationActionsService.instance;
  }

  public static openDrawer = () => NavigationActionsService.navigation.openDrawer();

  public static closeDrawer = () => NavigationActionsService.navigation.closeDrawer();

  public static push = (screenName: string, passProps = {}) => {
    NavigationActionsService.navigation.navigate(screenName, passProps);
  };

  public static setRoot = (screenName: string, passProps = {}) => {
    NavigationActionsService.navigation.dispatch(StackActions.replace(screenName, passProps));
  };

  public static pop = () => {
    Keyboard.dismiss();
    NavigationActionsService.navigation.pop(1);
  };
  public static popTo = (screenPosition: number) => {
    Keyboard.dismiss();
    NavigationActionsService.navigation.pop(screenPosition);
  };

  public static popToRoot = () => {
    Keyboard.dismiss();
    NavigationActionsService.navigation.popToTop();
  };

  public static showLoading = () => {
    NavigationActionsService.navigation.navigate(LOADING_SCREEN);
  };

  public static hideAlert = () => {
    const { index, routes } = NavigationActionsService.navigation.getParent().getState();
    const currentRoute = routes[index].name;
    if (currentRoute === ALERT_POPUP) {
      NavigationActionsService.pop();
    }
  };

  public static hideLoading = () => {
    const { index, routes } = NavigationActionsService.navigation.getParent().getState();
    const currentRoute = routes[index].name;

    if (currentRoute === LOADING_SCREEN) {
      NavigationActionsService.pop();
    }
  };

  public static destroyScreen = () => {
    NavigationActionsService.stackNavigation.pop();
    const maximumStackLength = NavigationActionsService.stackNavigation.length;
    NavigationActionsService.navigation =
      NavigationActionsService.stackNavigation[maximumStackLength - 1];
  };
}

export default NavigationActionsService;
