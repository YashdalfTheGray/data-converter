import { Component } from 'preact';

import { data as sampleData } from 'data-converter/sampleData';
import { JsonValue } from 'data-converter/types';

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
    console.log(currentData);
    return (
      <div className="main">
        <pre>{JSON.stringify(currentData, null, 2)}</pre>
      </div>
    );
  }
}
