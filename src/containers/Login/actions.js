import { postRequest } from '../../utils/request';
import { browserHistory } from 'react-router';
import {
  LOGIN_SUBMIT,
  LOGIN_ERROR
} from './constants';

const loginApi = 'https://i2x-challenge.herokuapp.com/core/login/';

export function loginUser ( user ) {
  return dispatch => {
    dispatch( loginSubmit() );
    return postRequest( loginApi, user )
      .then( res => {
          console.log( res )
          localStorage.setItem( 'token', res.token );
          // browserHistory.push( '/feature' );
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