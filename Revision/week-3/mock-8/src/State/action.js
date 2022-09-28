import axios from "axios";
import * as types from "./actionTypes";

const getHotelsRequest = () => {
  return {
    type: types.GET_HOTELS_REQUEST,
  };
};
const getHotelsSuccess = (payload) => {
  return {
    type: types.GET_HOTELS_SUCCESS,
    payload,
  };
};

const getHotelsFailure = () => {
  return {
    type: types.GET_HOTELS_FAILURE,
  };
};

const addHotelRequest = () => {
  return {
    type: types.ADD_HOTEL_REQUEST,
  };
};
const addHotelSuccess = (payload) => {
  return {
    type: types.ADD_HOTEL_SUCCESS,
    payload,
  };
};

const addHotelFailure = () => {
  return {
    type: types.ADD_HOTEL_FAILURE,
  };
};


const editHotelRequest = () => {
    return {
        type: types.EDIT_HOTEL_REQUEST
    }
}
const editHotelSuccess = (payload) => {
    return {
        type: types.EDIT_HOTEL_SUCCESS,
        payload
    }
}
const editHotelFailure = () => {
    return {
        type: types.EDIT_HOTEL_FAILURE
    }
}



const deleteHotelRequest = () => {
  return {
    type: types.DELETE_HOTEL_REQUEST,
  };
};
const deleteHotelSuccess = (payload) => {
  return {
    type: types.DELETE_HOTEL_SUCCESS,
    payload,
  };
};
const deleteHotelFailure = () => {
  return {
    type: types.DELETE_HOTEL_FAILURE,
  };
};

export {
  getHotelsFailure,
  getHotelsRequest,
  getHotelsSuccess,
  addHotelFailure,
  addHotelRequest,
  addHotelSuccess,
  deleteHotelFailure,
  deleteHotelRequest,
  deleteHotelSuccess,
  editHotelFailure,
  editHotelRequest,
  editHotelSuccess
};
