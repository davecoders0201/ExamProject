import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import HomeScreen from '../screen/tabScreens/HomeScreen';
import AnalyticsScreen from '../screen/tabScreens/AnalyticsScreen';
import Microphone from '../screen/tabScreens/Microphone';
import Saved from '../screen/tabScreens/Saved';
import Profile from '../screen/tabScreens/Profile';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveBackgroundColor: '#574a70',
        headerShown: false,
      }}
      initialRouteName="login">
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../asset/home.png')}
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AnalyticsScreen"
        component={AnalyticsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../asset/analyticslight.png')}
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Microphone"
        component={Microphone}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../asset/microphonelight.png')}
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../asset/save-instagram.png')}
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../asset/profile.png')}
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
