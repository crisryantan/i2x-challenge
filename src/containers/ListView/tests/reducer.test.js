import { fromJS } from 'immutable';
import listViewReducer from '../reducer';
import {
  getList,
  getListSuccess,
  getListFail
} from '../actions';

describe( 'listViewReducer', () => {
  let state;

  beforeEach( () => {
    state = fromJS( {
      fetching : false,
      error    : false,
      lists     : []
    } );
  } );

  it( 'should return the initial state', () => {
    const expectedResult = state;
    expect( listViewReducer( undefined, {} ).toJS() ).toEqual( expectedResult.toJS() );
  } );

  it( 'should handle the getList action correctly', () => {
    const expectedResult = fromJS( {
      fetching : false,
      error    : false,
      lists     : []
    } );
    expect( listViewReducer( state, getList() ).toJS() ).toEqual( expectedResult.toJS() );
  } );

  it( 'should handle the getListSuccess action correctly', () => {
    const lists = [ { id : 1 }, { id: 2 } ];
    const expectedResult = fromJS( {
      fetching : false,
      error    : false,
      lists
    } );
    expect( listViewReducer( state, getListSuccess( lists ) ).toJS() ).toEqual( expectedResult.toJS() );
  } );

  it( 'should handle the getListFail action correctly', () => {
    const expectedResult = fromJS( {
      fetching : false,
      error    : 'failed',
      lists    : []
    } );
    expect( listViewReducer( state, getListFail( 'failed' ) ).toJS() ).toEqual( expectedResult.toJS() );
  } );

} );
