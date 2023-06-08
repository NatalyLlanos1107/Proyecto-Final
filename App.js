import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './Navigation';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaProvider>

    <NavigationContainer>
      <MyTabs></MyTabs>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}


