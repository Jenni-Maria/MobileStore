import * as React from 'react';
import { Dimensions, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { StyleSheet, Text } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { useLayoutEffect } from "react";

const HomeRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fcfcfc' }} >
    <Text>Home</Text>
  <Text>CONTENT WILL BE ADDED HERE DURING PROJECT</Text>
  </View>
);

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

const renderScene = SceneMap({
  home: HomeRoute,
  product: ProductRoute,
  about: AboutUsRoute,
  contact: ContactRoute,
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
    backgroundColor: '#fff',
  },

})
