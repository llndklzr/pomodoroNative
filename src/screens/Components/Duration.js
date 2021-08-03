import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';

import secondsToDuration from '../../utils/secondstoDuration';
import GlobalStyle from '../../utils/GlobalStyle';

export default function Duration({
  title,
  duration,
  incrementDuration,
  decrementDuration,
}) {
  const {active} = useSelector(state => state.pomodoroReducer);

  return (
    <View style={GlobalStyle.buttonGroup}>
      <Text style={GlobalStyle.buttonGroupLabel}>{title}</Text>
      <Icon.Button
        style={GlobalStyle.button}
        name="minus-square"
        size={50}
        activeOpacity={0.6}
        underlayColor="#ffffff00"
        backgroundColor="#ffffff00"
        color={active ? '#999999' : '#ffffff'}
        onPress={() => decrementDuration()}
        solid
      />

      <Icon.Button
        style={GlobalStyle.button}
        name="plus-square"
        size={50}
        activeOpacity={0.6}
        underlayColor="#ffffff00"
        backgroundColor="#ffffff00"
        color={active ? '#999999' : '#ffffff'}
        onPress={() => incrementDuration()}
        solid
      />
      <Text style={GlobalStyle.buttonGroupLabel}>
        {secondsToDuration(duration)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
