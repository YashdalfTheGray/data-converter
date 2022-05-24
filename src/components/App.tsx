import { Component } from 'preact';

import Header from './Header';

import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <p className="main">This is where the main content will go</p>
        <p className="footer">This is a footer</p>
      </div>
    );
  }
}
