import { fromJS } from 'immutable';

import {
  GET_LIST,
  GET_LIST_SUCCESS,
  GET_LIST_FAIL
} from './constants';

const initialState = fromJS( {
  lists    : [],
  fetching : false,
  error    : false
} );

function LoginReducer ( state = initialState, action ) {
  switch ( action.type ) {
    case GET_LIST :
      return state
        .set( 'lists', [] )
        .set( 'fetching', true )
        .set( 'error', false );

    case GET_LIST_SUCCESS :
      return state
        .set( 'lists', action.lists )
        .set( 'fetching', false );

    case GET_LIST_FAIL :
      return state
        .set( 'lists', [] )
        .set( 'fetching', false )
        .set( 'error', action.err );

    default:
      return state;
  }
}

export default LoginReducer;