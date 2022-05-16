import App from './components/App';

const app = new App({});

document.querySelector('div#app-root')!.innerHTML = app.render();
