import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';

import AppReducer from './containers/App/reducer';
import ListViewReducer from './containers/ListView/reducer';
import LoginReducer from './containers/Login/reducer';

export default function createReducer ( asyncReducers ) {
	return combineReducers( {
		app   : AppReducer,
		list  : ListViewReducer,
		login : LoginReducer,
		form  : formReducer,
		...asyncReducers
	} );
}