// App.js
import * as React from 'react';
import MobileApp from './MobileApp';
import LoginScreen from './LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
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
          name="Home"
          options={{
            title: 'Home',
            headerTitle: 'MobileApp name here',
          }}
        >
          {(props) => (
            <MobileApp {...props} isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Log in',
            headerBackTitle: 'Back',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
