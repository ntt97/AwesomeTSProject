import { Action } from 'redux';

import { NetworkActionTypes } from './NetworkAction';

export interface INetworkStatus {
  isConnected: boolean;
}

export interface IChangeConnectionStatusPayload {
  isConnected: boolean;
}

export interface IChangeConnectionStatusAction extends Action {
  type: NetworkActionTypes.CHANGE_CONNECTION_STATUS;
  payload: IChangeConnectionStatusPayload;
}

export type INetworkStatusAction = IChangeConnectionStatusAction;

export type IChangeConnectionStatus = (
  payload: IChangeConnectionStatusPayload
) => IChangeConnectionStatusAction;

export interface DispatchProps {
  changeConnectionStatus: IChangeConnectionStatus;
}
