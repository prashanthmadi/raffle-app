//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Icon } from 'react-native-elements'

// create a component
class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color='#f50'
                onPress={Actions.addUser} />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Home;
