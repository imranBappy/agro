import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import ButtomTabs from './components/ButtomTabs';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>

      {/* <Text>Open up App.js to start working on your app!</Text>
      <Text
        style={{
          color: 'red',
          fontSize: 30,
          fontWeight: 'bold',
          marginTop: 20,

        }}
      >Hello World</Text> */}
      <HomeScreen />
      <StatusBar style="auto" />

      {/* <NavigationContainer>
        <ButtomTabs />
      </NavigationContainer> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
