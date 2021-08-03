import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './screens/Splash';
import Settings from './screens/Pomodoro';
import {Provider} from 'react-redux';
import {Store} from './redux/store';
import Pomodoro from './screens/Pomodoro';

const RootStack = createStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#008022',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold',
            },
          }}>
          <RootStack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="Pomodoro"
            component={Pomodoro}
            options={{
              headerShown: false,
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
