import _ from 'lodash';
import { fromJS } from 'immutable';

import {
  LOGIN_SUBMIT,
  LOGIN_ERROR
} from './constants';

const initialState = fromJS( {
  loginSubmit : false,
  loginError  : false
} );

function LoginReducer ( state = initialState, action ) {
  switch ( action.type ) {
    case LOGIN_SUBMIT :
      return state
        .set( 'loginSubmit', true )
        .set( 'loginError', false );

    case LOGIN_ERROR :
      return state
        .set( 'loginSubmit', false )
        .set( 'loginError', action.err );

    default:
      return state;
  }
}

export default LoginReducer;