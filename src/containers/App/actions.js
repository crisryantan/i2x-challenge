import {
  AUTH_USER
} from './constants';
import { setAuthorizationToken } from '../../utils/request';

export function authUser () {
  setAuthorizationToken( localStorage.getItem( 'token' ) );
  return {
    type : AUTH_USER
  };
}