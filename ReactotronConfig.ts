import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sagaPlugin from 'reactotron-redux-saga';
import { reactotronRedux } from 'reactotron-redux';

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure()
  .useReactNative()
  .use(sagaPlugin())
  .use(reactotronRedux())
  .connect();
console.log = Reactotron.log;

export default Reactotron;
