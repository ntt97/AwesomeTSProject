import { StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const styles = StyleSheet.create({
  containerActive: {
    flex: 1,
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  containerInactive: {
    flex: 1,
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  iconImage: {
    top: 2,
  },
  viewTabBar: {
    flexDirection: 'row',
  },
  txtIconTabBar: {
    paddingTop: 10,
  },
});

export default styles;
