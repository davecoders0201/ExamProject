import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './screen/components/Login';
import Reg from './screen/components/Reg';
import TabNavigation from './navigation/tabNavigation';
import BookDetails from './screen/externalScreens/BookDetails';
import drawerNavigation from './navigation/drawerNavigation';

// Create a Reference of the Stack which will display in the screen stack wise
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Reg" component={Reg} />
        <Stack.Screen name="Tabnavigation" component={TabNavigation} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
        {/* <Stack.Screen name="DrawerNavigation" component={drawerNavigation} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
