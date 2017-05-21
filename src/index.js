import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './store';

import App from './containers/App';
import Login from './containers/Login';

import './global.css';

const initialState = {};
const store        = configureStore( initialState );

ReactDOM.render( 
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="login" component={Login} />
        </Route>
    </Router>
  </Provider>,
  document.querySelector( '#root' )
);
