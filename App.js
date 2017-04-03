import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Home from './src/Home';
import AddUser from './src/AddUser';

import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'

const reducers = {
  form: formReducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="home" component={Home} title="Home" initial={true}/>
            <Scene key="addUser" component={AddUser} title="Add User"/>
          </Scene>
        </Router>
      </Provider>
    );
  }
}
