import React from 'react';
import {ToastAndroid, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Duration from './Components/Duration';
import {
  decrementFocusDuration,
  incrementFocusDuration,
  decrementBreakDuration,
  incrementBreakDuration,
} from '../redux/actions';
import Timer from './Components/Timer';
import ProgressBar from './Components/ProgressBar';
import GlobalStyle from '../utils/GlobalStyle';
import secondsToDuration from '../utils/secondstoDuration';

export default function Pomodoro() {
  const {focusDuration, breakDuration, active, sessionType} = useSelector(
    state => state.pomodoroReducer,
  );
  const dispatch = useDispatch();

  const focusDurationIncreaseHandler = () => {
    if (!active) {
      if (focusDuration < 3600) {
        dispatch(incrementFocusDuration(focusDuration));
      } else {
        ToastAndroid.showWithGravity(
          'Maximum focus duration is 60:00',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
    }
  };
  const focusDurationDecreaseHandler = () => {
    if (!active) {
      if (focusDuration > 300) {
        dispatch(decrementFocusDuration(focusDuration));
      } else {
        ToastAndroid.showWithGravity(
          'Minimum focus duration is 5:00',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
    }
  };
  const breakDurationIncreaseHandler = () => {
    if (!active) {
      if (breakDuration < 900) {
        dispatch(incrementBreakDuration(breakDuration));
      } else {
        ToastAndroid.showWithGravity(
          'Maximum break duration is 15:00',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
    }
  };
  const breakDurationDecreaseHandler = () => {
    if (!active) {
      if (breakDuration > 60) {
        dispatch(decrementBreakDuration(breakDuration));
      } else {
        ToastAndroid.showWithGravity(
          'Minimum break duration is 1:00',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
    }
  };

  return (
    <View style={GlobalStyle.mainBody}>
      <Duration
        title={'Focus'}
        duration={focusDuration}
        incrementDuration={focusDurationIncreaseHandler}
        decrementDuration={focusDurationDecreaseHandler}
      />
      <Duration
        title={'Break'}
        duration={breakDuration}
        incrementDuration={breakDurationIncreaseHandler}
        decrementDuration={breakDurationDecreaseHandler}
      />
      <Timer />
      <ProgressBar />
      {active && (
        <Text style={GlobalStyle.sessionTotalLabel}>
          {sessionType === 'focus'
            ? `Focusing for ${secondsToDuration(focusDuration)}`
            : `On break for ${secondsToDuration(breakDuration)}`}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
