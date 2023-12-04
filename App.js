import * as React from 'react';
import MobileApp from './MobileApp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import SignUp from './screens/SignUp';


export default function TabViewExample({ navigation }) {
  const Stack = createNativeStackNavigator();

  return (
   <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Main">

      <Stack.Screen
        name="MobileApp name here"
        component={MobileApp}
        
        />
      <Stack.Screen
        name="Create account"
        component={SignUp}/>
        
    </Stack.Navigator>
   </NavigationContainer> 
  );
}
