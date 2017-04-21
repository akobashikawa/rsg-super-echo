import React, { Component } from 'react';
import './SuperEcho.css';

class SuperEcho extends Component {
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
    );
  }

}

export default SuperEcho;
