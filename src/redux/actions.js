export const SET_ACTIVE = 'SET_ACTIVE';
export const SET_SESSION_TYPE = 'SET_SESSION_TYPE';
export const INCREMENT_FOCUS_DURATION = 'INCREMENT_FOCUS_DURATION';
export const DECREMENT_FOCUS_DURATION = 'DECREMENT_FOCUS_DURATION';
export const INCREMENT_BREAK_DURATION = 'INCREMENT_BREAK_DURATION';
export const DECREMENT_BREAK_DURATION = 'DECREMENT_BREAK_DURATION';
export const SET_CURRENT_DURATION = 'SET_CURRENT_DURATION';
export const SET_TIMER = 'SET_TIMER';
export const TICK_TIMER = 'TICK_TIMER';
export const SET_IS_TIMER_RUNNING = 'SET_IS_TIMER_RUNNING';

export const setActive = active => dispatch => {
  dispatch({
    type: SET_ACTIVE,
    payload: active,
  });
};
export const setSessionType = sessionType => dispatch => {
  dispatch({
    type: SET_SESSION_TYPE,
    payload: sessionType,
  });
};
export const incrementFocusDuration = focusDuration => dispatch => {
  dispatch({
    type: INCREMENT_FOCUS_DURATION,
    payload: focusDuration,
  });
};
export const decrementFocusDuration = focusDuration => dispatch => {
  dispatch({
    type: DECREMENT_FOCUS_DURATION,
    payload: focusDuration,
  });
};
export const incrementBreakDuration = breakDuration => dispatch => {
  dispatch({
    type: INCREMENT_BREAK_DURATION,
    payload: breakDuration,
  });
};
export const decrementBreakDuration = breakDuration => dispatch => {
  dispatch({
    type: DECREMENT_BREAK_DURATION,
    payload: breakDuration,
  });
};
export const setCurrentDuration = currentDuration => dispatch => {
  dispatch({
    type: SET_CURRENT_DURATION,
    payload: currentDuration,
  });
};
export const setTimer = timer => dispatch => {
  dispatch({
    type: SET_TIMER,
    payload: timer,
  });
};
export const tickTimer = timer => dispatch => {
  dispatch({
    type: TICK_TIMER,
    payload: timer,
  });
};
export const setIsTimerRunning = isTimerRunning => dispatch => {
  dispatch({
    type: SET_IS_TIMER_RUNNING,
    payload: isTimerRunning,
  });
};
