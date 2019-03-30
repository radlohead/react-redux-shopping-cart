import { combineReducers } from 'redux';
import {
    PRODUCTS_FETCHED,
    PRODUCTS_ERROR,
    COUPONS_REQUEST,
    COUPONS_FETCHED,
    COUPONS_ERROR
} from '../actions/ActionTypes';
import * as Types from '../types/IReducerTypes';

const products = (state = {}, action: Types.IReducer['action']) => {
    switch(action.type) {
        case PRODUCTS_FETCHED:
            return {
                ...state,
                productsJSON: action.productsJSON
            }
        case PRODUCTS_ERROR:
            return {
                ...state,
                productsJSON: action.productsJSON
            }
        default:
            return state;
    }
}

const coupons = (state = {}, action: Types.IReducer['action']) => {
    switch(action.type) {
        case COUPONS_REQUEST:
            return state;
        case COUPONS_FETCHED:
            return {
                ...state,
                couponsJSON: action.couponsJSON
            }
        case COUPONS_ERROR:
            return {
                ...state,
                couponsJSON: action.couponsJSON
            }
        default:
            return state;
    }
}

export default combineReducers({
    products,
    coupons
});