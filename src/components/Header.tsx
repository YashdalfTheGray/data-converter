import { Component } from 'preact';

import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Data Converter</h1>
      </div>
    );
  }
}
