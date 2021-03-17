import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text>Search</Text>
      </View>
      <View style={styles.list}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7eae5',
  },
  search: {
    backgroundColor: '#d6d6d6',
    justifyContent: 'center',
    padding: 20,
    marginTop: isAndroid ? 40 : 0,
  },
  list: {
    flex: 1,
    backgroundColor: '#797979',
    padding: 20,
  },
});
