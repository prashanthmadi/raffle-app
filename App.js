import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Home from './src/Home';
import AddUser from './src/AddUser';

import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'

var Parse = require('parse/react-native');

const reducers = {
  form: formReducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

Parse.initialize("751f3a93-42ea-413e-ad27-4feb6c0c7ace");
Parse.serverURL = 'https://raffleappm.azurewebsites.net/parse';
window.Parse = Parse;


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="home" component={Home} title="Home" initial={true} hideNavBar={true}/>
            <Scene key="addUser" component={AddUser} title="Add User" hideNavBar={false}/>
          </Scene>
        </Router>
      </Provider>
    );
  }
}
