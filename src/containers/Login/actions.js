import { postRequest, setAuthorizationToken } from '../../utils/request';
import { browserHistory } from 'react-router';
import { authUser } from '../App/actions';
import {
  LOGIN_SUBMIT,
  LOGIN_ERROR
} from './constants';

const loginApi = 'https://i2x-challenge.herokuapp.com/core/login/';

export function loginUser ( user ) {
  return dispatch => {
    dispatch( loginSubmit() );
    return postRequest( loginApi, user )
      .then( ( { token } ) => {
          localStorage.setItem( 'token', token );
          dispatch( authUser() );
          browserHistory.push( '/' );
      } )
      .catch( err => {
        dispatch( loginError( err.non_field_errors[ 0 ] ) )
      } );
  }
}

export function loginSubmit () {
  return {
    type : LOGIN_SUBMIT
  };
}

export function loginError ( err ) {
  return {
    type : LOGIN_ERROR,
    err
  }
}