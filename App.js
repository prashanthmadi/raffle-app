import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Home from './src/Home';
import AddUser from './src/AddUser';

export default class App extends React.Component {
  render() {
    return (
      <Router>
      <Scene key="root">
        <Scene key="home" component={Home} title="Home" initial={true}/>
        <Scene key="addUser" component={AddUser} title="Add User"/>
      </Scene>
    </Router>
    );
  }
}
