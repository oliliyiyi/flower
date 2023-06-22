import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootComponent from './src';
import DetailScreen from './src/DetailScreen/DetailScreen';

export default function App() {
  return (
    <View>
      <DetailScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
