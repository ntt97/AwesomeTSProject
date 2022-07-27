import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { compose, configureStore } from '@reduxjs/toolkit';

import rootSaga from '../sagas/index';
import BaseReducer from '../reducers/BaseReducer';
import Reactotron from '../../ReactotronConfig';

let sagaMiddleware;
let store;

if (!__DEV__) {
  sagaMiddleware = createSagaMiddleware();
  store = configureStore({
    reducer: BaseReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
    },
  });
} else {
  const sagaMonitor = Reactotron.createSagaMonitor();
  sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  const enhancer = compose(sagaMiddleware, Reactotron.createEnhancer());
  store = configureStore({
    reducer: BaseReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({ thunk: false }).concat(enhancer);
    },
  });
}

sagaMiddleware.run(rootSaga);

export function reduxProvider(Component: any) {
  return (props: any) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
