import React from 'react';

import Header from './components/header/header.js';
import ToDo from './components/todo/todo-connected';
// import Auth from './components/auth/auth';
import Login from './components/auth/login';
import AuthContext from './components/auth/context.js';

export default class App extends React.Component {
  render() {
    return (
      <AuthContext>
        <Login />
        <Header />
        <ToDo />
      </AuthContext>
    );
  }
}
