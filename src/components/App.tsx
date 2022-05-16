import Component from '../Component';

export default class App extends Component {
  constructor(props: {}) {
    super('App', props);
  }

  render() {
    return `
      <div>This is a test</div>
    `;
  }
}
