import { postRequest } from '../../utils/request';
import { browserHistory } from 'react-router';
import { authUser } from '../App/actions';
import {
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './constants';

const loginApi = '/core/login/';

export function loginUser ( user ) {
  return dispatch => {
    dispatch( { type : LOGIN_SUBMIT } );
    return postRequest( loginApi, user )
      .then( ( { token } ) => {
          dispatch( { type : LOGIN_SUCCESS } );
          localStorage.setItem( 'token', token );
          dispatch( authUser() );
          browserHistory.push( '/' );
      } )
      .catch( err => {
        dispatch( loginError( err.non_field_errors[ 0 ] ) )
      } );
  }
}

export function loginError ( err ) {
  return {
    type : LOGIN_ERROR,
    err
  }
}