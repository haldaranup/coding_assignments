export const actionTypes = {
  // key value pair
  GET_USERS_LIST_REQUEST: 'GET_USERS_LIST_REQUEST',
GET_USERS_LIST_SUCCESS: 'GET_USERS_LIST_SUCCESS',
GET_USERS_LIST_FAILURE: 'GET_USERS_LIST_FAILURE'

};

// do not change names
export const addUserRequest = () => ({
  type: actionTypes.ADD_USER_REQUEST
});
// do not change names, and arguments
export const addUserSuccess = (data) => ({
  type: actionTypes.ADD_USER_SUCCESS,

  payload: data
  
});
// do not change names
export const addUserFailure = () => ({
  type: actionTypes.ADD_USER_FAILURE
});
