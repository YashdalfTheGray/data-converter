import { Component } from 'preact';

import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        This application converts code using&nbsp;
        <a href="https://github.com/nodeca/js-yaml">
          <code>js-yaml</code>
        </a>
        &nbsp;and does not communicate with a server. You can find the
        code&nbsp;
        <a href="https://github.com/YashdalfTheGray/data-converter">here</a>.
      </div>
    );
  }
}
