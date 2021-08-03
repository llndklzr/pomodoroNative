import {
  SET_ACTIVE,
  SET_SESSION_TYPE,
  INCREMENT_FOCUS_DURATION,
  DECREMENT_FOCUS_DURATION,
  INCREMENT_BREAK_DURATION,
  DECREMENT_BREAK_DURATION,
  SET_CURRENT_DURATION,
  SET_TIMER,
  SET_IS_TIMER_RUNNING,
  TICK_TIMER,
} from './actions';

const initialState = {
  active: false,
  sessionType: 'focus',
  focusDuration: 1500,
  breakDuration: 300,
  currentDuration: 0,
  timer: 1500,
  isTimerRunning: false,
};

function pomodoroReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE:
      return {...state, active: action.payload};
    case SET_SESSION_TYPE:
      return {...state, sessionType: action.payload};
    case INCREMENT_FOCUS_DURATION:
      return {...state, focusDuration: action.payload + 300};
    case DECREMENT_FOCUS_DURATION:
      return {...state, focusDuration: action.payload - 300};
    case INCREMENT_BREAK_DURATION:
      return {...state, breakDuration: action.payload + 60};
    case DECREMENT_BREAK_DURATION:
      return {...state, breakDuration: action.payload - 60};
    case SET_CURRENT_DURATION:
      return {...state, currentDuration: action.payload};
    case SET_TIMER:
      return {...state, timer: action.payload};
    case TICK_TIMER:
      return {...state, timer: action.payload - 1};
    case SET_IS_TIMER_RUNNING:
      return {...state, isTimerRunning: action.payload};
    default:
      return state;
  }
}

export default pomodoroReducer;
