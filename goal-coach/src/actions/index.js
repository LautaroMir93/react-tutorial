import {SIGNED_IN} from '../constants';

export const logUser = email => {
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}
