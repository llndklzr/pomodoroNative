import React from 'react';
import {View, Text} from 'react-native';
import * as Progress from 'react-native-progress';
import {useSelector} from 'react-redux';
import GlobalStyle from '../../utils/GlobalStyle';
import secondsToDuration from '../../utils/secondstoDuration';

export default function ProgressBar() {
  const {timer, active, sessionType, currentDuration} = useSelector(
    state => state.pomodoroReducer,
  );
  return (
    <View style={GlobalStyle.progressBarContainer}>
      {active && (
        <Progress.Circle
          progress={(currentDuration - timer) / currentDuration}
          size={200}
          color={sessionType === 'focus' ? '#91ffb2' : '#ff9191'}
          strokeCap="butt"
          thickness={10}
          borderWidth={0}
          showsText
          formatText={() => secondsToDuration(timer)}
          textStyle={GlobalStyle.progressBarLabel}
        />
      )}
    </View>
  );
}
