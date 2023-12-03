import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth, signInWithEmailAndPassword } from './firebase';
//import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  //const isAuthenticated = useNavigation(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState({ message: '', color: 'black' });

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoginMessage({ message: 'Login succeeded!', color: 'green' });
      console.log('Navigating to Home with isAuthenticated: true');
      navigation.navigate('Home', { isAuthenticated: true });
    } catch (error) {
      let errorMessage = 'Login failed';

      if (error.code === 'auth/user-not-found') {
        errorMessage = 'Login failed: User not found. Check your email address.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Login failed: Incorrect password. Check your password.';
      }

      setLoginMessage({ message: errorMessage, color: 'red' });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />

      <Button title="Log in" onPress={handleLogin} />

      <Text style={[styles.message, { color: loginMessage.color }]}>{loginMessage.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '100%',
  },
  message: {
    marginTop: 16,
  },
});

export default LoginScreen;