import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import ProductListingScreen from './screens/ProductListingScreen';
export default function App() {
  return (
    <View style={styles.container}>
   <ProductListingScreen/>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60, 
  
  },
 
});
