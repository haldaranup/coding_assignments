// Write the action object creators in this file
import * as types from "./actionTypes"
const getProfileDetailsRequest = () => {
    return {
        type: types.GET_PROFILE_DETAILS_REQUEST
    }
}
const getProfileDetailsSuccess = (payload) => {
    return {
        type: types.GET_PROFILE_DETAILS_SUCCESS,
        payload
    }
}
const getProfileDetailsFailure = () => {
    return {
        type: types.GET_PROFILE_DETAILS_FAILURE
    }
}

export {getProfileDetailsRequest, getProfileDetailsSuccess, getProfileDetailsFailure}