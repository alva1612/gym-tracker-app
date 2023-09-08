import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './views/Home';
import styles from './main.css'

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
 
    </View>
  );
}

