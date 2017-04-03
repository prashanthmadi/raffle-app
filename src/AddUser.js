//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddUserForm from './AddUserForm';
import {Actions} from 'react-native-router-flux'

// create a component
class AddUser extends Component {
    handleSubmit = (values) => {
        var user = new Parse.User();
        user.set("username", values.userName);
        user.set("email", values.email);
        user.set("password", "test");

        user.signUp({ ACL: new Parse.ACL() }, {
            success: function(user) {
                Actions.home();
            },
            error: function(user, error) {
                console.warn("Error: " + error.message);
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
