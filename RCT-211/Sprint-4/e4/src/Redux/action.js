import * as types from "./actionTypes"

const getCountriesRequest = () =>{
    return {
        type: types.GET_COUNTRIES_REQUEST
    }
}
const getCountriesSuccess = (payload) =>{
    return {
        type: types.GET_COUNTRIES_SUCCESS,
        payload
    }
}

const getCountriesFailure = () =>{
    return {
        type: types.GET_COUNTRIES_FAILURE
    }
}
const updateCountryRequest = () =>{
    return {
        type: types.UPDATE_COUNTRY_REQUEST
    }
}
const updateCountrySuccess = (payload) =>{
    return {
        type: types.UPDATE_COUNTRY_SUCCESS,
        payload
    }
}
const updateCountryFailure = () =>{
    return {
        type: types.UPDATE_COUNTRY_FAILURE
    }
}
const deleteCountryRequest = () =>{
    return {
        type: types.GET_COUNTRIES_REQUEST
    }
}
const deleteCountrySuccess = (payload) =>{
    return {
        type: types.GET_COUNTRIES_SUCCESS,
        payload
    }
}
const deleteCountryFailure = () =>{
    return {
        type: types.GET_COUNTRIES_FAILURE
    }
}



export {getCountriesRequest, getCountriesSuccess, getCountriesFailure, updateCountryFailure, updateCountryRequest, updateCountrySuccess, deleteCountryFailure, deleteCountryRequest, deleteCountrySuccess}