import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import GlobalStyle from '../../utils/GlobalStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {useSelector, useDispatch} from 'react-redux';
import {
  setActive,
  setCurrentDuration,
  setIsTimerRunning,
  setSessionType,
  setTimer,
  tickTimer,
} from '../../redux/actions';

import useInterval from '../../utils/useInterval';
import SoundPlayer from 'react-native-sound-player';

export default function Timer() {
  const {
    isTimerRunning,
    timer,
    sessionType,
    breakDuration,
    focusDuration,
    active,
  } = useSelector(state => state.pomodoroReducer);
  const dispatch = useDispatch();

  useInterval(
    () => {
      dispatch(tickTimer(timer));
      if (timer < 1) {
        if (sessionType === 'focus') {
          dispatch(setSessionType('break'));
          dispatch(setCurrentDuration(breakDuration));
          dispatch(setTimer(breakDuration));
          SoundPlayer.playSoundFile('beep', 'mp3');
        } else {
          dispatch(setSessionType('focus'));
          dispatch(setCurrentDuration(focusDuration));
          dispatch(setTimer(focusDuration));
          SoundPlayer.playSoundFile('beep', 'mp3');
        }
      }
    },
    isTimerRunning ? 1000 : null,
  );

  const playPauseHandler = () => {
    const oppositeOfCurrent = !isTimerRunning;
    dispatch(setIsTimerRunning(oppositeOfCurrent));

    if (!active) {
      dispatch(setActive(true));
      dispatch(setCurrentDuration(focusDuration));
      dispatch(setTimer(focusDuration));
    }
  };

  const stopHandler = () => {
    dispatch(setIsTimerRunning(false));
    dispatch(setActive(false));
    dispatch(setSessionType('focus'));
  };

  return (
    <View style={GlobalStyle.buttonGroup}>
      <Icon.Button
        style={GlobalStyle.button}
        name="stop-circle"
        size={50}
        activeOpacity={0.6}
        underlayColor="#ffffff00"
        backgroundColor="#ffffff00"
        color={active ? '#ffffff' : '#999999'}
        onPress={stopHandler}
        solid
      />

      <Icon.Button
        style={GlobalStyle.button}
        name={isTimerRunning ? 'pause-circle' : 'play-circle'}
        size={50}
        activeOpacity={0.6}
        underlayColor="#ffffff00"
        backgroundColor="#ffffff00"
        color="#ffffff"
        onPress={playPauseHandler}
        solid
      />
    </View>
  );
}

const styles = StyleSheet.create({});
