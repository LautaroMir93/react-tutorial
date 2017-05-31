import {ADD_REMINDER, DELETE_REMINDER} from '../constants.js';

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

const reminders = (state = [], action) => {
  let reminders = null;
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      console.log('remainders as state', reminders);
      return reminders;
      break;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      return reminders;
    default:
      return state;
  }
}

export default reminders;
