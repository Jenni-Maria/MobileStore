import * as React from 'react';
import { Dimensions, View, Button, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import { useLayoutEffect } from "react";
import { StyleSheet, Text } from 'react-native';

const HomeRoute = ({ navigation }) => (

    <View style={{ flex: 1, backgroundColor: '#fcfcfc' }} >
    <Text>Home</Text>
    <Button title='Create account'
      onPress={() => navigation.navigate('SignUp')} />
    <Text>CONTENT WILL BE ADDED HERE DURING PROJECT</Text>
  </View>
)
  
const ProductRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fcfcfc' }} >
    <Text>Products</Text>
    <Text>CONTENT WILL BE ADDED HERE DURING PROJECT</Text>
  </View>
);

const AboutUsRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fcfcfc'}} >
    <Text>About us</Text>
    <Text>CONTENT WILL BE ADDED HERE DURING PROJECT</Text>
  </View>
);

const ContactRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fcfcfc'}} >
    <Text>Contact information</Text>
    <Text>CONTENT WILL BE ADDED HERE DURING PROJECT</Text>
  </View>
);

/*const SignUpRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fcfcfc'}} >
    <SignUp />
  </View>
);*/


const renderScene = SceneMap({
  home: HomeRoute,
  product: ProductRoute,
  about: AboutUsRoute,
  contact: ContactRoute,
  //signup: SignUpRoute,
})

const renderTabBar = props => (
  <TabBar
  //getAccessibilityLabel={({ route }) => route.accessibilityLabel}
  {...props}
    indicatorStyle={{ backgroundColor: '#fff' }}
    //style={{ backgroundColor: 'pink' }}
  />
);

export default function MobileApp({navigation}) {
  //const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home' },
    { key: 'product', title: 'Product' },
    { key: 'about', title: 'About us' },
    { key: 'contact', title: 'Contact' },
    //{ key: 'signup', title: 'SignUp' },
  ]);

  useLayoutEffect(() => {
    navigation.setOptions({
        headerStyle: {
            backgroundColor: '#f0f0f0',
        }},)
      })

  return (

    
    <TabView style={styles.container}
      renderTabBar={renderTabBar}
      initialLayout={{ width: Dimensions.get('window').width }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      />
      
      );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    textAlign: 'left',
    marginTop: 30,
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

  }})
