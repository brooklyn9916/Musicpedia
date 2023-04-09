import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Homepage from './Homepage';
import Quiz from './Quiz';
import Nilai from './Nilai';

import HomePageSejarah from './HomePageSejarah';
import HomeSejarah from './HomeSejarah';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Homepage"
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        headerShown: false,
        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
          };
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Nilai" component={Nilai} />
    
      <Stack.Screen name="HomePageSejarah" component={HomePageSejarah} />
      <Stack.Screen name="HomeSejarah" component={HomeSejarah} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
