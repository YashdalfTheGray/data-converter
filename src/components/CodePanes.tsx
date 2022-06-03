import { Component } from 'preact';
import * as yaml from 'js-yaml';

import './CodePanes.scss';

import { data as sampleData } from '~/src/sampleData';
import { JsonValue } from '~/src/types';

export type CodePanesState = {
  currentData: JsonValue;
};
export default class CodePanes extends Component<{}, CodePanesState> {
  constructor(props: {}) {
    super(props);
    this.state = { currentData: sampleData };
  }

  render() {
    const { currentData } = this.state;
    return (
      <div className="main code-panes">
        <pre className="code-pane left">
          {JSON.stringify(currentData, null, 2)}
        </pre>
        <pre className="code-pane right">
          {yaml.dump(currentData, { indent: 2, quotingType: '"', forceQuotes: false })}
        </pre>
      </div>
    );
  }
}
