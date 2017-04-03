//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddUserForm from './AddUserForm';

// create a component
class AddUser extends Component {
    handleSubmit = (values) => {
        console.warn(values);
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
