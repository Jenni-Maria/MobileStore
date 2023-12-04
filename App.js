// App.js
import * as React from 'react';
import MobileApp from './MobileApp';
import LoginScreen from './LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import SignUp from './screens/SignUp';


export default function TabViewExample() {
  const Stack = createNativeStackNavigator();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogout = () => {
    // Handle the logout logic (e.g., update authentication status)
    setIsAuthenticated(false);
  };

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
