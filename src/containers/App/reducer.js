import _ from 'lodash';
import { AUTH_USER, UNAUTH_USER } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS( {
  user : null
} );

function AppReducer ( state = initialState, action ) {
  switch ( action.type ) {
    case AUTH_USER :
      return state
        .set( 'user', {
          authenticated : true
        } );
    case UNAUTH_USER :
      return state
        .set( 'user', null );
    default:
      return state;
  }
}

export default AppReducer;