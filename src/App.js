import React, { Component } from 'react';
import './App.css';
import CertModal from "./Modal/CertModal";
import Nav from "./Nav/Nav";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shouldShow: true
        }
    }

    getUrl() {
        return "blah";
    }

    render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Thank you for participating in Virgil Con!</h2>
        </div>
          <Nav
          url={this.getUrl()}/>
          {this.state.shouldShow ? <CertModal/> : null}
      </div>
    );
  }
}

export default App;
