import { INetworkStatus, INetworkStatusAction } from './NetworkInterface';
import { NetworkActionTypes } from './NetworkAction';

const initialState: INetworkStatus = {
  isConnected: false,
};

const NetworkReducer = (state: INetworkStatus = initialState, action: INetworkStatusAction) => {
  switch (action.type) {
    case NetworkActionTypes.CHANGE_CONNECTION_STATUS:
      return {
        ...state,
        isConnected: action.payload.isConnected,
      };

    default: {
      return state;
    }
  }
};

export default NetworkReducer;
