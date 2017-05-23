import { fromJS } from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';

import createReducer from './reducers';

export default function configureStore( initialState = {} ) {
	const routingMiddleware = routerMiddleware( browserHistory );
	return createStore(
		createReducer(),
		fromJS( initialState ),
		applyMiddleware(
			thunkMiddleware,
			routingMiddleware
		)
	);
}