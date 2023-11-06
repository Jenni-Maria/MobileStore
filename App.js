import * as React from 'react';
import MobileApp from './MobileApp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function TabViewExample() {
  const Stack = createNativeStackNavigator();

  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="home"
        component={MobileApp}
        options={{
          title: 'Home',
          headerTitle: 'MobileApp name here',
        }}
        />
    </Stack.Navigator>
   </NavigationContainer> 
  );
}