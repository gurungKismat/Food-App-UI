import React from 'react';
import {View, Text, Button} from 'react-native';
import colors from './assets/colors/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Icon.loadFont();

const HomeStack = createNativeStackNavigator();



const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Button title='Go to second screen' onPress={() => navigation.navigate('second screen')}/>
    </View>
  );
};

const SecondScreen = () => { 
  return (
    <View>
      <Text>Second Screen</Text>
    </View>
  );
 }


const App = () => {
  return (
    // <View style={{flex: 1}}>
    //   <Text
    //     style={{
    //       color: colors.secondary,
    //       fontSize: 24,
    //       fontFamily: 'Montserrat-Regular',
    //       textAlign: 'center',
    //     }}>
    //     Hello
    //   </Text>

    //   <Icon name="rocket" size={30} color="black" />
    // </View>
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="home" component={HomeScreen} />
        <HomeStack.Screen name="second screen" component={SecondScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
