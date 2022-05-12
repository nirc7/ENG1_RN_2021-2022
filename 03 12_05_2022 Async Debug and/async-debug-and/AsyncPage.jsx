import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AsyncPage() {

  const btnAdd = () => {
    //debugger;
    let num = 7;
    num++;
    console.log(num);
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      console.log(jsonValue);
      await AsyncStorage.setItem('user_id', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  const btnAdd2Async7 = async () => {
    let obj = { id: 8 };
    storeData(obj);
  }


  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user_id')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  }

  const btnGetAsync7 = async () => {
    let obj = await getData();
    console.log(obj.id);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="add" onPress={btnAdd} />
      <Button title="add2async" onPress={btnAdd2Async7} />
      <Button title="Get2async" onPress={btnGetAsync7} />
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
