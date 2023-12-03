import * as React from 'react';
import { Dimensions, View, Button } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { StyleSheet, Text } from 'react-native';
import OfferBanner from './OfferBanner';
import { useNavigation } from '@react-navigation/native';

//let isAuthenticated = false;
const HomeRoute = ({ route }) => {
  const navigation = useNavigation();
  const isAuthenticated = useNavigation(isAuthenticated); //route.params?.isAuthenticated || false;
  console.log('isAuthenticated in HomeRoute:', isAuthenticated);

  const handleLoginPress = () => {
    console.log('Navigating to Login');
    navigation.navigate('Login');
  };

  const handleLogoutPress = () => {
    console.log('Logging out and navigating to Login with isAuthenticated: false ', isAuthenticated);
    isAuthenticated = false;
    navigation.navigate('Home', { isAuthenticated: false });
   // navigation.navigate('Login');//, { isAuthenticated: false });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fcfcfc', paddingTop: 20, paddingHorizontal: 16 }}>
      {isAuthenticated ? (
        <Button title="Log Out" onPress={handleLogoutPress} />
      ) : (
        <Button title="Log in here" onPress={handleLoginPress} />
      )}
      <Text>Home</Text>
      <Text>CONTENT WILL BE ADDED HERE DURING PROJECT</Text>
      <OfferBanner />
    </View>
  );
};

const ProductRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fcfcfc' }}>
    <Text>Products</Text>
    <Text>CONTENT WILL BE ADDED HERE DURING PROJECT</Text>
  </View>
);

const AboutUsRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fcfcfc' }}>
    <Text>About us</Text>
    <Text>CONTENT WILL BE ADDED HERE DURING PROJECT</Text>
  </View>
);

const ContactRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fcfcfc' }}>
    <Text>Contact information</Text>
    <Text>CONTENT WILL BE ADDED HERE DURING PROJECT</Text>
  </View>
);

const renderScene = SceneMap({
  home: HomeRoute,
  product: ProductRoute,
  about: AboutUsRoute,
  contact: ContactRoute,
});

const renderTabBar = (props) => (
  <TabBar {...props} indicatorStyle={{ backgroundColor: '#fff' }} />
);

export default function MobileApp() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home' },
    { key: 'product', title: 'Product' },
    { key: 'about', title: 'About us' },
    { key: 'contact', title: 'Contact' },
  ]);

  return (
    <TabView
      style={styles.container}
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
});