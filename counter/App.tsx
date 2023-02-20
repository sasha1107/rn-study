import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [cnt, setCnt] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.assa}>Open up App.tsx to start working on your app!우하하</Text>
      <Text style={styles.cnt}>{cnt}</Text>
      <Button title="더하기" onPress={() => setCnt(cnt + 1)}></Button>
      <Button title="빼기" onPress={() => setCnt(cnt - 1)}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  assa: {
    color: 'pink',
  },
  cnt: {
    fontSize: 50,
    marginTop: 20,
  }
});
