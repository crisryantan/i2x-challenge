import _ from 'lodash';
import { fromJS } from 'immutable';

const initialState = fromJS( {
  authorized  : false
} );

function AppReducer ( state = initialState, action ) {
  switch ( action.type ) {
    default:
      return state;
  }
}

export default AppReducer;