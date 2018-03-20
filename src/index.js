import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>, 
    document.getElementById('root')
  );

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // I had to re-require the App in order to
    // get the hot reload updates working...
    const nextApp = require('./components/App').default;
    render(nextApp)
  });
}