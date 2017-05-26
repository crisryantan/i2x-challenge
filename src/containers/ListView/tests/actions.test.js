import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';
import thunk from 'redux-thunk';
import {
  getList,
  getListSuccess,
  getListFail
} from '../actions';

import {
  GET_LIST,
  GET_LIST_SUCCESS,
  GET_LIST_FAIL,
} from '../constants';

const middlewares = [ thunk ];
const mockStore   = configureMockStore( middlewares );


const host = 'https://i2x-challenge.herokuapp.com';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe( 'SearchList Actions', () => {

  describe( 'fetching list', () => {
    const removeItem = jest.fn();

    afterEach ( () => {
      nock.cleanAll();
    } );

    it( 'should fetch successfully', () => {
      nock( 'https://i2x-challenge.herokuapp.com' )
        .get( '/ai/recording/list/' )
        .reply( 200, { results : [ { id : 1 }, { id : 2 } ] } )

      const expectedActions = [
        { type : GET_LIST },
        { type : GET_LIST_SUCCESS, lists : [ { id : 1 }, { id : 2 } ] }
      ];
      const store = mockStore( { lists : [] } );

      return store.dispatch( getList() ).then( () => {
        expect( store.getActions() ).toEqual( expectedActions );
        nock.isDone();
      } );
    } );

    it( 'should fail in fetching', () => {
      var scope = nock( 'https://i2x-challenge.herokuapp.com' )
        .get( '/ai/recording/list/' )
        .replyWithError('Something went wrong.');

      const err = new Error( 'Something went wrong.' );

      const expectedActions = [
        { type : GET_LIST },
        { type : GET_LIST_FAIL, err }
      ];
      const store = mockStore( { error : null } );

      return store.dispatch( getList() ).then( () => {
        expect( store.getActions() ).toEqual( expectedActions );
      } );
    } );

  } );

} )