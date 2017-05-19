import { fromJS } from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

export default function configureStore( initialState = {} ) {
	return createStore(
		rootReducer,
		fromJS( initialState ),
		applyMiddleware(
			thunkMiddleware
		)
	);
}