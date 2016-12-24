import React, { Component } from 'react';
import {Link} from 'react-router';
import ajax from 'superagent';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Title</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row">
            <div className="col-md-3">
              <h3>Menu</h3>
            </div>
            <div className="col-md-9">
              {this.props.children}
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default App;
