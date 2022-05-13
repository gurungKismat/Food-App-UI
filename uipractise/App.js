import React from 'react';
import {View, Text, Button} from 'react-native';
import colors from './assets/colors/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home';
import Details from './src/components/Details';

const HomeStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        />
        <HomeStack.Screen
          name="details"
          component={Details}
          options={{
            headerShown: false,
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
