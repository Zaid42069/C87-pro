import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import StarMapsScreens from './screens/StarMaps';
import DailyPicScreen from './screens/DailyPic'
import SpaceCraftsScreen from './screens/SpaceCrafts';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
  <Stack.Navigator initialRouteName="home" screenOptions={{
    headerShown:false
  }}>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="StarMap" component={StarMapsScreens}/>
    <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
    <Stack.Screen name="SpaceCraft" component={SpaceCraftsScreen}/>
  </Stack.Navigator>







    </NavigationContainer>
  );
}


