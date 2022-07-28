import { Action } from 'redux';

import { BaseActionTypes } from './baseAction';

export interface IError {
  message: string;
  code: number;
  data?: any;
}

export interface IActionCallback {
  onSuccess?: (data?: any, identify?: string) => void;
  onFail?: (error?: IError) => void;
}

export interface IActionPassChannelIdPayload {
  channel_id: string;
}

export interface IActionResetAllState extends Action {
  type: BaseActionTypes.RESET_ALL_STATE;
}
