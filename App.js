import { StatusBar as ExportStatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExportStatusBar style="auto" />
    </>
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
    marginTop: StatusBar.currentHeight,
  },
  list: {
    flex: 1,
    backgroundColor: '#797979',
    padding: 20,
  },
});
