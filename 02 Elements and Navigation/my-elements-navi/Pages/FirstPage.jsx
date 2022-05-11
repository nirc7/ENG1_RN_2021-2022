import { StatusBar } from 'expo-status-bar';
import {  Button as BTN2 , StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/base';

export default function FirstPage(props) {
    return (
        <View style={styles.container}>
            <Text>First Page!</Text>
            <BTN2 title="go 2 second page!" onPress={() =>
                props.navigation.navigate('SecondPage', { user: 'Lucy' + new Date().getSeconds() })} />
            <TouchableOpacity onPress={() => {
                props.navigation.navigate('MaterialTabbedPage');
            }}>
                <Text style={{
                    color: 'white',
                    borderRadius: 30, borderWidth: 2, margin: 15,
                    backgroundColor: 'grey', padding: 15
                }} >Goto to Material Tabbed Page!</Text>
            </TouchableOpacity>
            <Button
                iconRight
                title="HOME"
                icon={{
                    name: 'home',
                    type: 'font-awesome',
                    size: 35,
                    color: 'black',
                }}
                iconContainerStyle={{ marginRight: 10, marginLeft:20 }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                    backgroundColor: 'rgba(90, 154, 130, 1)',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 30,
                }}
                containerStyle={{
                    width: 250,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
            />
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
