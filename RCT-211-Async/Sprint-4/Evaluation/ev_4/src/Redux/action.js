//Write the action creator functions here
import * as types from "./actionTypes"

export const getProductsRequest = () => {
    return {
        type: types.GET_PRODUCTS_REQUEST
    }
}
export const getProductsSuccess = (payload) => {
    return {
        type: types.GET_PRODUCTS_SUCCESS,
        payload
    }
}
export const getProductsFailure = () => {
    return {
        type: types.GET_PRODUCTS_FAILURE
    }
}


export const addProductRequest = () => {
    return {
        type: types.ADD_PRODUCT_REQUEST
    }
}
export const addProductSuccess = (payload) => {
    return {
        type: types.ADD_PRODUCT_SUCCESS,
        payload
    }
}
export const addProductFailure = () => {
    return {
        type: types.ADD_PRODUCT_FAILURE
    }
}
export const editProductRequest = () => {
    return {
        type: types.EDIT_PRODUCT_REQUEST
    }
}
export const editProductSuccess = (payload) => {
    return {
        type: types.EDIT_PRODUCT_SUCCESS,
        payload
    }
}
export const editProductFailure = () => {
    return {
        type: types.EDIT_PRODUCT_FAILURE
    }
}
export const deleteProductRequest = () => {
    return {
        type: types.DELETE_PRODUCT_REQUEST
    }
}
export const deleteProductSuccess = (payload) => {
    return {
        type: types.DELETE_PRODUCT_SUCCESS,
        payload
    }
}
export const deleteProductFailure = () => {
    return {
        type: types.DELETE_PRODUCT_FAILURE
    }
}