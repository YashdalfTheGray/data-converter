import { Component } from 'preact';

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
      <div className="main">
        <pre>{JSON.stringify(currentData, null, 2)}</pre>
      </div>
    );
  }
}
