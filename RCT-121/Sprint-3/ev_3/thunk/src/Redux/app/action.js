export const userAction = {

    GET_USERS_LIST_REQUEST: 'GET_USERS_LIST_REQUEST',
  GET_USERS_LIST_SUCCESS: 'GET_USERS_LIST_SUCCESS',
  GET_USERS_LIST_FAILURE: 'GET_USERS_LIST_FAILURE'
  
  };
  

  export const userRequest = () => ({
    type: actionTypes.ADD_USER_REQUEST
  });

  export const userSuccess = (data) => ({
    type: actionTypes.ADD_USER_SUCCESS,
  
    payload: data
    
  });

  export const userFailure = () => ({
    type: actionTypes.ADD_USER_FAILURE
  });
  