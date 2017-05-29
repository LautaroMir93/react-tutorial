import {ADD_REMINDER} from '../constants';

export const addRemainder = text => {
  const action = {
    type:ADD_REMINDER,
    text
  }
  console.log('action in addRemainder', action);
  return action;
}
