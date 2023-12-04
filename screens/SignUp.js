import { ScrollView, StyleSheet, Text, TextInput, Button, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';


export default function SignUp() {
  return (
    
    <KeyboardAvoidingView
      style={styles.container}>
      
      <SafeAreaView>
          <ScrollView keyboardDismissMode='interactive'>


      <Text style={styles.heading}>
              Create Account
            </Text>
            <Text style={styles.label}>
              First name
            </Text>
            <TextInput style={styles.input}
            />
            <Text style={styles.label}>
              Last name
            </Text>
            <TextInput style={styles.input}/>

            <Text style={styles.label}>
              Email
            </Text>
            <TextInput placeholder='Username' style={styles.input} keyboardType='email-address' />
            <Text style= {styles.label}>
              Phone
            </Text>
            <TextInput style={styles.input}
            keyboardType='phone-pad' />
            <Text style={styles.label}>
              Username
            </Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>
              Password
            </Text>
            <TextInput style={styles.input}
            secureTextEntry />
            <Button title='Submit' />
            </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>

    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight: 0,
  },
  heading: {
    fontSize: 24,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 10,
  },
  label: {
    margin: 8,
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#F0F0F0',
    backgroundColor: '#FAFAFA',
  },
});
