import axios from 'axios';

function parseJSON ( response ) {
  return response.data;
}

function handleError ( response ) {
  let err = JSON.stringify( response );
  err = JSON.parse( err );

  // if request throws 401 unauthorized
  // it is assumed that the user is now using an expired token
  if ( err.response.status === 401 ) {
      localStorage.removeItem( 'token' );
      setAuthorizationToken();
  }

  throw err.response.data;
}


export function getRequest ( url ) {
  return axios.get( url )
      .then( parseJSON )
      .catch( handleError );
}

export function postRequest ( url, payload ) {
  return axios.post( url, payload )
      .then( parseJSON )
      .catch( handleError );
}

export function setAuthorizationToken ( token ) {
  if ( token ) {
      axios.defaults.headers.common.Authorization = `JWT ${ token }`;
  } else {
      delete axios.defaults.headers.common.Authorization;
  }
}
