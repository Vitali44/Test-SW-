import React from 'react';
import Persons from '../src/Components/Persons/Persons'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Persons />
      </div>
    );
  }
}

export default App;
