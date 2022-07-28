import { IChangeConnectionStatusPayload, IChangeConnectionStatusAction } from './NetworkInterface';

enum NetworkActionTypes {
  ['CHANGE_CONNECTION_STATUS'] = 'CHANGE_CONNECTION_STATUS',
}

function changeConnectionStatus(
  payload: IChangeConnectionStatusPayload
): IChangeConnectionStatusAction {
  return {
    type: NetworkActionTypes.CHANGE_CONNECTION_STATUS,
    payload,
  };
}

const NetworkAction = {
  changeConnectionStatus,
};

export { NetworkAction, NetworkActionTypes };
