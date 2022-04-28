import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [txtNum, setTxtNum] = useState(0);

  const btnAddOne = () => {
    let num = parseInt(txtNum);
    num++;
    setTxtNum(num);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: 'red' }}>nir!</Text>
      <TextInput onChangeText={(text) => setTxtNum(text)} />
      <Button title="add one" onPress={btnAddOne} />
      <Text style={{ fontSize: 30, color: 'red' }}>{txtNum}</Text>
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
});
