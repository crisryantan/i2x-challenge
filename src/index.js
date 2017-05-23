import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'

import configureStore from './store';
import App from './containers/App';
import Login from './containers/Login';
import ListView from './containers/ListView';

import { authUser } from './containers/App/actions';

import './global.css';

const initialState = {};
const store        = configureStore( initialState );

if ( localStorage.getItem( 'token' ) ) {
  store.dispatch( authUser() );
}

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.get( 'app' ).get( 'user' ), // how to get the user state
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
});

ReactDOM.render( 
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={UserIsAuthenticated( ListView )} />
            <Route path="login" component={Login} />
        </Route>
    </Router>
  </Provider>,
  document.querySelector( '#root' )
);
