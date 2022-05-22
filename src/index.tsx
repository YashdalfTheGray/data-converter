import { render } from 'preact';

import App from './components/App';

document.querySelector('div#app-root')!.innerHTML = '';
render(<App />, document.querySelector('div#app-root')!);
