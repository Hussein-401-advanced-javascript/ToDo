import React from 'react';

import Header from './components/header/header.js';
import ToDo from './components/todo/todo-connected';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <ToDo />
      </>
    );
  }
}
