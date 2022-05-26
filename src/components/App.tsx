import { Component } from 'preact';

import Header from './Header';
import Footer from './Footer';
import CodePanes from './CodePanes';

import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <CodePanes />
        <Footer />
      </div>
    );
  }
}
