import { fromJS } from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import createReducer from './reducers';

export default function configureStore( initialState = {} ) {
	return createStore(
		createReducer(),
		fromJS( initialState ),
		applyMiddleware(
			thunkMiddleware
		)
	);
}