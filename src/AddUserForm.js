//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Field, reduxForm} from 'redux-form';
import UserInput from './UserInput';
import emailImg from './images/email.png'
import personImg from './images/person.png'
import ButtonSubmit from './ButtonSubmit';
// create a component
class AddUserForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formContent}>
                    <Field name="userName" component={UserInput} source={personImg} placeholder='User Name' autoCapitalize={'none'} returnKeyType={'done'} autoCorrect={false}/>
                    <Field name="email" component={UserInput} source={emailImg} placeholder='Email' autoCapitalize={'none'} returnKeyType={'done'} autoCorrect={false}/>
                </View>
                <View style={styles.formSubmit}>
                    <Field name="submit" component={ButtonSubmit} type="SingUp" action={this.props.handleSubmit}/>
                    </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    formContent: {
        marginTop:100,
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    formSubmit: {
        flex: 1,
        justifyContent: 'flex-start',
    }
});

//make this component available to the app
export default reduxForm({
    form: 'signUpForm', // a unique identifier for this form
})(AddUserForm)
