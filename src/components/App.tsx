import { Component } from 'preact';

import Header from './Header';
import Footer from './Footer';

import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="main">This is where the main content will go</div>
        <Footer />
      </div>
    );
  }
}
