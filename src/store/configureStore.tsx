import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import rootSaga from '@sagas/index';
import rootReducer from '../reducers/BaseReducer';
import Reactotron from '../../ReactotronConfig';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let sagaMiddleware;
let store;

if (!__DEV__) {
  sagaMiddleware = createSagaMiddleware();
  store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
} else {
  const sagaMonitor = Reactotron.createSagaMonitor();
  sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  const enhancer = compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer());
  store = createStore(persistedReducer, enhancer);
}

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export function reduxProvider(Component: any) {
  return (props: any) => (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...props} />
      </PersistGate>
    </Provider>
  );
}
export { store };
