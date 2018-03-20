import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Home from './Home';

// Dependencies for code splitting by route with
// async loading and 'loading' placeholder
import importedComponent from 'react-imported-component';
import Loading from './Loading';

// This allows both code splitting by route
// and loading of the components asynchronously

const AsyncDynamicPage = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'), 
  { LoadingComponent: Loading }
);

const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
  { LoadingComponent: Loading }
);

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPage} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default hot(module)(App);