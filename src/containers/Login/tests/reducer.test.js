import { fromJS } from 'immutable';
import loginReducer from '../reducer';
import {
  loginUser,
  loginError
} from '../actions';

describe( 'loginReducer', () => {
  let state;

  beforeEach( () => {
    state = fromJS( {
      loginSubmit : false,
      loginError  : false
    } );
  } );

  it( 'should return the initial state', () => {
    const expectedResult = state;
    expect( loginReducer( undefined, {} ).toJS() ).toEqual( expectedResult.toJS() );
  } );

  it( 'should handle the getList action correctly', () => {
    const expectedResult = fromJS( {
      loginSubmit : false,
      loginError  : false
    } );
    expect( loginReducer( state, loginUser() ).toJS() ).toEqual( expectedResult.toJS() );
  } );

  it( 'should handle the getListFail action correctly', () => {
    const expectedResult = fromJS( {
      loginSubmit : false,
      loginError  : 'failed'
    } );
    expect( loginReducer( state, loginError( 'failed' ) ).toJS() ).toEqual( expectedResult.toJS() );
  } );

} );
