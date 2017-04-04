//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddUserForm from './AddUserForm';
import {Actions} from 'react-native-router-flux'

// create a component
class AddUser extends Component {
    handleSubmit = (values) => {
        var Participants = Parse.Object.extend("Participants");
        var participant = new Participants();
        participant.set("username", values.userName);
        participant.set("email", values.email);

        participant.save(null, {
            success: function(participant) {
                Actions.home();
            },
            error: function(gameScore, error) {
                console.warn('Failed to create new object, with error code: ' + error.message);
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <AddUserForm onSubmit={this.handleSubmit}/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

//make this component available to the app
export default AddUser;
