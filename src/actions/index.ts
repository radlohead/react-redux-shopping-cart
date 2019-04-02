import {
    PRODUCTS_REQUEST,
    PRODUCTS_FETCHED, 
    COUPONS_REQUEST,
    COUPONS_FETCHED
} from './ActionTypes';
import * as Types from '../types/reducers/ReducerTypes';

export const requestProducts = () => {
    return {
        type: PRODUCTS_REQUEST
    }
}

export const fetchProducts = (productsJSON: Types.IFetchProducts) => {
    return {
        type: PRODUCTS_FETCHED,
        productsJSON
    }
}

export const requestCoupons = () => {
    return {
        type: COUPONS_REQUEST
    }
}

export const fetchCoupons = (couponsJSON: Types.IFetchCoupons) => {
    return {
        type: COUPONS_FETCHED,
        couponsJSON
    }
}