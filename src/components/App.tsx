import { Component } from 'preact';

import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="header">Data Converter</h1>
        <p className="main">This is where the main content will go</p>
        <p className="footer">This is a footer</p>
      </div>
    );
  }
}
