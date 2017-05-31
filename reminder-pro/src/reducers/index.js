import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from '../constants.js';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = action =>{
  let { text, dueDate } = action;
  return {
    text,
    id: Math.random(),
    dueDate
  }
}

const removeById = (state=[], id) =>{
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log('new reduced reminders', reminders);
  return reminders;
}

const checkDueDate = (state = [], dueDate){
  const reminders = state.map(reminder => {
    reminder.dueDate > dueDate ? return reminder;
  })
  return reminders;
}

const reminders = (state = [], action) => {
  let reminders = null;
  state = read_cookie('reminders');
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      bake_cookie('reminders', reminders);
      return reminders;
      break;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      bake_cookie('reminders', reminders);
      return reminders;
    case CLEAR_REMINDERS:
      reminders = [];
      bake_cookie('reminders', reminders);
      return reminders;
    case CHECK_DUEDATE:
      reminders = checkDueDate(state, action.dueDate);
      bake_cookie('reminders', reminders);
      return reminders;
    default:
      return state;
  }
}

export default reminders;
