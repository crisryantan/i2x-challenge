import {
  AUTH_USER,
  UNAUTH_USER
} from './constants';
import { setAuthorizationToken } from '../../utils/request';

export function authUser () {
  setAuthorizationToken( localStorage.getItem( 'token' ) );
  return {
    type : AUTH_USER
  };
}

export function unAuthUser () {
  setAuthorizationToken();
  localStorage.removeItem( 'token' );
  return {
    type : UNAUTH_USER
   };
}