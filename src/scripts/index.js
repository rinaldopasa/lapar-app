import 'regenerator-runtime';
import './components/header';
import './components/footer';
import './components/main';

import '../styles/main.css';
import swRegister from './utils/sw.register';

const loadAppModule = () =>
  import(/* webpackChunkName: "app-module" */ './views/app');

const initializeApp = async () => {
  await Promise.all([loadAppModule()]);

  const App = await Promise.resolve(loadAppModule()).then(
    (module) => module.default,
  );

  const app = new App({
    button: document.getElementById('mobileBtn'),
    drawer: document.getElementById('navigationDrawer'),
    content: document.getElementById('restaurants'),
  });

  window.addEventListener('hashchange', () => app.renderPage());

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });
};

initializeApp();
