
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


export default function SecondPage(props) {

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('focus');
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('unfocus');
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text>Second Page!</Text>
      <TouchableOpacity onPress={() => { props.navigation.navigate('FirstPage'); }}>
        <Text style={{
          color: 'white',
          borderRadius: 30, borderWidth: 2, margin: 15,
          backgroundColor: 'grey', padding: 15
        }} >Goto to First Page!</Text>
      </TouchableOpacity>
      <Text>{props.route.params != undefined ? props.route.params.user : '...'}</Text>
      <StatusBar style="auto" />
    </View >
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
