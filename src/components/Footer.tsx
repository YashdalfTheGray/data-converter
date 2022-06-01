import { Component } from 'preact';

import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        This application does conversions using&nbsp;
        <a href="https://github.com/nodeca/js-yaml">
          <code>js-yaml</code>
        </a>
        &nbsp;in the browser itself. You can find the code&nbsp;
        <a href="https://github.com/YashdalfTheGray/data-converter">here</a>.
      </div>
    );
  }
}
