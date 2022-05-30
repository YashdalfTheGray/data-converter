import { Component } from 'preact';

import Heading from '/src/components/Title';

import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Heading type="h1">Data Converter</Heading>
      </div>
    );
  }
}
