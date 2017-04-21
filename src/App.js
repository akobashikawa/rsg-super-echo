import React, { Component } from 'react';

// https://github.com/kevgathuku/react-bootstrap-jquery/blob/master/src/index.js
// https://github.com/ryanflorence/react-training/blob/gh-pages/lessons/05-wrapping-dom-libs.md
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
window.jQuery = $;
require('bootstrap');

import logo from './logo.svg';
import './App.css';

const Navbar = (props) => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="./">
          <img src={logo} className="App-logo" alt="logo" />
          {props.title}
        </a>
      </div>
    </div>
  </nav>
);

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      echo: ''
    };
  }

  superEcho(s) {
    return s.toUpperCase();
  }

  changeHandler(event) {
    const echo = this.superEcho(event.target.value);
    this.setState({echo});
  }

  render() {
    return (
      <div className="App">
        
        <Navbar title="Super Echo" />

        <div className="main">
          <div className="SuperEcho">
            <div className="container">
              <textarea
                className="form-control"
                placeholder="Write here"
                onChange={event => this.changeHandler(event)}
              ></textarea>
              {this.state.echo && (
                <pre className="bg-info superecho-output">{this.state.echo}</pre>
              )}
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default App;
