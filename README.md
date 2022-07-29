@ntt97

# Template RN TS Project

A Template project created in React Native using Redux and Provider.

## Getting Started

The Template contains the minimal implementation required to create a new library or project. The repository code is preloaded with some basic components like basic app architecture, app theme, constants and required dependencies to create a new project. By using boiler plate code as standard initializer, we can have same patterns in all the projects that will inherit it. This will also help in reducing setup & development time by allowing you to use same code pattern and avoid re-writing from scratch.

### Prerequisites

There’s a few prerequisites that should be installed on your local environment before install the project such as,
​

- Node.js > 14 and npm, yarn
- Watchman
- Xcode 13
- Cocoapods 1.10.1
- JDK > 11
- Android Studio and Android SDK

## How to Use

**Step 1:**

Download or clone this repo by using the link below:

```
https://github.com
```

**Step 2:**

Go to project root and execute the following command in console to get the required dependencies:

```
npm run setup
npm run run-android-dev
npm run run-ios-dev
```

## Hide Generated Files

In Visual Studio Code, navigate to `Visual studio code` -> `My project` -> `.vscode` -> `settings.json` and paste the below lines under `Files:Exclude` section:

```
 **/node_modules": true,
 ios/Pods": true,
 ....
```

## Template Features:

- Splash
- Login
- Home

### Up-Coming Features:

- Add core component
- Unit test

### Libraries & Tools Used

- [Axios](https://github.com/axios/axios)
- [React Navigation](https://reactnavigation.org)
- [Redux](https://redux.js.org/) (to connect the reactive data of your application with the UI)
- [Redux saga](https://redux-saga.js.org)
- [Redux-persist](https://github.com/rt2zz/redux-persist)
- [React-native-fast-image](https://github.com/DylanVann/react-native-fast-image) (component handles image caching)
- [Formik](https://formik.org/docs/guides/validation)
- [Notifications](https://github.com/zo0r/react-native-push-notification)
- [React-native-keyboard-aware-scroll-view](https://github.com/APSL/react-native-keyboard-aware-scroll-view)
- [I18n-js next](https://github.com/i18next/next-i18next)
- [Reactotron](https://github.com/infinitered/reactotron) (Developer Tools show API requests & responses, state redux, console... )

### Folder Structure

Here is the core folder structure which flutter provides.

```
react-app/
|- android
|- build
|- ios
|- src
|- test
```

Here is the folder structure we have been using in this project

```
src/
|- assets/
|- components/
|- localiz/
|- modules/
|- navigaion/
|- reducer/
|- sagas/
|- store/
|- screens/
|- hooks/
|- utils/
|- helpers/
|- storages/
|- services/
|- App.tsx
```

Now, lets dive into the lib folder which has the main code for the application.

```
1- constants - All the application level constants are defined in this directory with-in their respective files. This directory contains the constants for `theme`, `dimentions`, `api endpoints`, `preferences` and `strings`.
2- modules - Contains the modules layer of your project, includes directories for local, network and shared pref/cache.
3- stores - Contains store(s) for state-management of your application, to connect the reactive data of your application with the UI.
4- screens — Contains all the ui of your project, contains sub directory for each screen.
5- utils — Contains the utilities/common functions of your application.
6- components — Contains the common widgets for your applications. For example, Button, TextField etc.
7- navigations — This file contains all the navigation for your application.
8- App.tsx - This is the starting point of the application. All the application level configurations are defined in this file i.e, theme, navigation, title, orientation etc.
```

### Constants

This directory contains all the application level constants. A separate file is created for each type as shown in example below:

```
constants/
|- colors.ts
|- images.ts
|- screenKeys.ts
|- fonts.dart
|- globalStyles.ts
```

### module

All the business logic of your application will go into this directory, it represents the data layer of your application. It is sub-divided into three directories `atuh`, `network` and `base`, each containing the domain specific logic. Since each layer exists independently, that makes it easier to unit test. The communication between UI and data layer is handled by using central repository.

```
module/
|- auth/
    |- authAction.ts
    |- authInterface.ts
    |- authReducer.ts
    |- authSaga.ts
    |- authServicer.ts

|- network/
    |- networkAction.ts
    |- networkInterface.ts
    |- networkReducer.ts

|- base
    |- baseAction.ts
    |- baseReducer.ts

```

### Screens

This directory contains all the ui of your application. Each screen is located in a separate folder making it easy to combine group of files related to that particular screen. All the screen specific widgets will be placed in `widgets` directory as shown in the example below:

```
screens/
|- login
   |- LoginScreen.tsx
   |- LoginScreenStyles.ts
      |- LoginButton.tsx
      |- LoginButtonStyles.s
```

### Utils

Contains the common file(s) and utilities used in a project. The folder structure is as follows:

```
utils/
|- encryption
   |- xxtea.ts
|- date
  |- dateTime.ts
```

### compnents

Contains the common widgets that are shared across multiple screens. For example, Button, TextField etc.

```
compnents/
|- customText
   |- CustomText.tsx
   |- CustomTextStyles.ts
|- customButton
  |- CustomButton.tsx
  |- CustomButtonStyles.ts
```

### navigation

This file contains all the navigation for your application.

```
navigation/
|- authNav.tsx
|- mainNav.tsx
|- baseNavigation.ts
|- initScreen.ts

```

```react-native
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


```

### App

This is the starting point of the application. All the application level configurations are defined in this file i.e, theme, routes, title, orientation etc.

```react-native
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
```

You must sign .apk with keystore, to do this just type in your terminal :

> npm run android-signer

The .apk file is located at `../android/app/build/outputs/apk/branch/app-release-unsigned.apk`

## Available Command

| npm run ...            | Description                                                     |
| ---------------------- | --------------------------------------------------------------- |
| adb-reverse            | Reset port ADB to tcp:8081                                      |
| setup                  | Install NPM packages                                            |
| run-ios-dev            | Run iOS project with Simulator set to "iPhone 11" in dev        |
| run-ios-staging        | Run iOS project with Simulator set to "iPhone 11" in staging    |
| run-ios-prod           | Run iOS project with Simulator set to "iPhone 11" in production |
| build-ios-dev          | Build ios .api with “development-mode” configuration            |
| build-ios-staging      | Build ios .api with “staging-mode” configuration                |
| build-ios-production   | Build ios .api with “production-mode” configuration             |
| run-android-dev        | Run Android project with Simulator in dev                       |
| run-android-staging    | Run Android project with Simulator in staging                   |
| run-android-production | Run Android project with Simulator in production                |
| build-android-dev      | Build ios .apk with “dev-mode” configuration                    |
| build-android-staging  | Build ios .apk with “staging-mode” staging                      |
| build-android-prod     | Build ios .apk with “production-mode” configuration             |
| clear-build-android    | Fix building android if preDexDebug error                       |
| lint                   | check code format                                               |

Footer
© 2022 GitHub, Inc.
