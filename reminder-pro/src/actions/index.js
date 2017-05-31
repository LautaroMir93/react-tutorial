import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS, CHECK_DUEDATE } from '../constants';


export const addReminder = (text,dueDate) => {
  const action = {
    type:ADD_REMINDER,
    text,
    dueDate
  }
  console.log('action in addRemainder', action);
  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('deleting in action', action);
  return action;
}

export const clearReminders = () => {
  const action = {
    type: CLEAR_REMINDERS
  }
  return action;
}

export const checkDueDate = (dueDate) => {
  const action = {
    type: CHECK_DUEDATE,
    dueDate
  }
  return action;
}
