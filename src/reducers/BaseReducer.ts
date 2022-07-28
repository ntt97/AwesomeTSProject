import { combineReducers } from 'redux';

import { INetworkStatus } from '@modules/network/NetworkInterface';
import NetworkReducer from '@modules/network/NetworkReducer';

export interface RootState {
  networkStatus: INetworkStatus;
}

const rootState = {
  networkStatus: NetworkReducer,
};

const BaseReducer = combineReducers(rootState);

export default BaseReducer;
