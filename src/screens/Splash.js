import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GlobalStyle from '../utils/GlobalStyle';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Pomodoro');
    }, 2000);
  }, []);

  return (
    <View style={GlobalStyle.splashGroup}>
      <Text style={GlobalStyle.splashTitle}>Pomodoro</Text>
      <FontAwesome5 name="stopwatch" size={200} color={'#ffffff'} solid />
    </View>
  );
}

const styles = StyleSheet.create({});
