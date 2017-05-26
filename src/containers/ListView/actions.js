import { getRequest } from '../../utils/request';
import {
  GET_LIST,
  GET_LIST_SUCCESS,
  GET_LIST_FAIL
} from './constants';

const apiUrl = '/ai/recording/list/';

export function getList () {
  return dispatch => {
    dispatch( { type : GET_LIST } );
    return getRequest( apiUrl )
      .then( ( { results } ) => {
        dispatch( getListSuccess( results ) );
      } )
      .catch( err => {
        dispatch( getListFail( err ) );
      } );
  }
}

export function getListSuccess ( lists ) {
  return {
    type : GET_LIST_SUCCESS,
    lists
  }
}

export function getListFail ( err ) {
  return {
    type : GET_LIST_FAIL,
    err
  }
}