import React, { Component } from 'react';
import './App.css';
import CertModal from "./Modal/CertModal";

class App extends Component {

    render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Thank you for participating in Virgil Con!</h2>
        </div>
          <CertModal/>
      </div>
    );
  }
}

export default App;
