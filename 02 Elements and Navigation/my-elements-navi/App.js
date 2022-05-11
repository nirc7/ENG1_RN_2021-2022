import React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
//import TabbedPageNavigator from './Pages/TabbedPage';
import MaterialTabbedPageNavigator from './Pages/MaterialTabbedPageNavigator';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="FirstPage">
      <Drawer.Screen
        name="FirstPage"
        component={FirstPage}
        options={{ drawerLabel: 'First Page' }}
      />
      <Drawer.Screen
        name="SecondPage"
        component={SecondPage}
        options={{ drawerLabel: 'Second Page' }}
      />
      <Drawer.Screen
        name="MaterialTabbedPageNavigator"
        component={MaterialTabbedPageNavigator}
        options={{ drawerLabel: 'Material' }}
      />
    </Drawer.Navigator>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MyDrawer>
        <Stack.Navigator initialRouteName="FirstPage"       >
          <Stack.Screen name="FirstPage" component={FirstPage} />
          <Stack.Screen options={{ headerShown: false }} name="SecondPage" component={SecondPage} />
          {/* <Stack.Screen name="TabbedPageNavigator" component={TabbedPageNavigator} /> */}
          <Stack.Screen name="MaterialTabbedPage" component={MaterialTabbedPageNavigator} />
        </Stack.Navigator>
      </MyDrawer>
    </NavigationContainer>
  );
}
export default App;