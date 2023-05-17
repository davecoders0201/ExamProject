import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screen/tabScreens/HomeScreen';
import AnalyticsScreen from '../screen/tabScreens/AnalyticsScreen';
import Microphone from '../screen/tabScreens/Microphone';
import Saved from '../screen/tabScreens/Saved';
import Profile from '../screen/tabScreens/Profile';

const Drawer = createDrawerNavigator();

const drawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="Analytics" component={AnalyticsScreen} />
      <Drawer.Screen name="Microphone" component={Microphone} />
      <Drawer.Screen name="Save" component={Saved} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default drawerNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
