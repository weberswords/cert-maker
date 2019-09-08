import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import CertModal from "./Modal/CertModal";

class App extends Component {

    render() {
    return (
        <BrowserRouter>
            <Redirect exact from="/" to="/0" />
                <div className="App">
                <div className="App-header">
                  <h2>Thank you for participating in Virgil Con!</h2>
                </div>
                    <Route path={'/:id'} component={CertModal} />
              </div>
        </BrowserRouter>
    );
  }
}

export default App;
