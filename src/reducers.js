import { combineReducers } from 'redux-immutable';
import AppReducer from './containers/App/reducer';

const rootReducer = combineReducers( {
    app : AppReducer
} );

export default rootReducer;