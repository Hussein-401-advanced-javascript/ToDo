import React from 'react';

import Header from './components/header/header.js';
import ToDo from './components/todo/todo-connected';
// import Auth from './components/auth/auth';
import Login from './components/auth/login';
import SiteContext from './components/auth/context.js';
import ControlPanal from './components/control/controlPanal'
export default class App extends React.Component {
  render() {
    return (

      <SiteContext>
        <Login />
        <Header />
        <ControlPanal />
        <ToDo />
      </SiteContext>
    );
  }
}
