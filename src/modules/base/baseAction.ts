import { IActionResetAllState } from './baseInterface';

enum BaseActionTypes {
  ['RESET_ALL_STATE'] = 'RESET_ALL_STATE',
}

function resetAllState(): IActionResetAllState {
  return {
    type: BaseActionTypes.RESET_ALL_STATE,
  };
}

const BaseAction = {
  resetAllState,
};

export { BaseAction, BaseActionTypes };
