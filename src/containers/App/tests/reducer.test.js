import { fromJS } from 'immutable';
import AppReducer from '../reducer';
import {
  authUser,
  unAuthUser
} from '../actions';

describe( 'AppReducer', () => {
  let state;
  const getItem = jest.fn();

  beforeEach( () => {
    state = fromJS( {
      user : null
    } );

    Object.defineProperty( window, 'localStorage', {
      value : {
        getItem
      }
    } );

  } );

  it( 'should return the initial state', () => {
    const expectedResult = state;
    expect( AppReducer( undefined, {} ).toJS() ).toEqual( expectedResult.toJS() );
  } );

  it( 'should handle the loginUser action correctly', () => {
    const expectedResult = fromJS( {
      user : {
        authenticated : true
      }
    } );
    expect( AppReducer( state, authUser() ).toJS() ).toEqual( expectedResult.toJS() );
  } );

  it( 'should handle the getListFail action correctly', () => {
    const expectedResult = fromJS( {
      user : null
    } );
    expect( AppReducer( state, unAuthUser ).toJS() ).toEqual( expectedResult.toJS() );
  } );

} );
