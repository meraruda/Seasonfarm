import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import {
  Route, Switch, HashRouter,
} from 'react-router-dom';
import { Home } from './containers/Home';

const Main = () => (
      <div>
        <Provider
        >
          <HashRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" component={Home} />
            </Switch>
          </HashRouter>
        </Provider>
      </div>
  );
  
  ReactDOM.render(<Main />, document.getElementById('app'));
  
  hot(module)(Main);