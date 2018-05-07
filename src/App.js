import React, { Component } from 'react';
import User from './components/user';

class App extends Component {

  render() {
    return (
      <div className="App">
      <h1>Users</h1>
      <User />

      </div>
    );
  }
}

export default App;
