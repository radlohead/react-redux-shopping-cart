import {
    PRODUCTS_REQUEST,
    PRODUCTS_ASYNC_REQUEST,
    PRODUCTS_FETCHED,
    PRODUCTS_UPDATE,
    COUPONS_REQUEST,
    COUPONS_ASYNC_REQUEST,
    COUPONS_FETCHED,
    GET_WISHLIST_ITEMS,
    TOTAL_PRICE
} from './ActionTypes'
import * as Types from '../types/reducers/ReducerTypes'

export const requestProducts = () => {
    return {
        type: PRODUCTS_REQUEST
    }
}

export const requestAsyncProducts = () => {
    return {
        type: PRODUCTS_ASYNC_REQUEST
    }
}

export const fetchProducts = (productsJSON: Types.IFetchProducts) => {
    return {
        type: PRODUCTS_FETCHED,
        productsJSON
    }
}

export const updateProducts = (productsJSON: Types.IUpdateProducts) => {
    return {
        type: PRODUCTS_UPDATE,
        productsJSON
    }
}

export const requestCoupons = () => {
    return {
        type: COUPONS_REQUEST
    }
}

export const requestAsyncCoupons = () => {
    return {
        type: COUPONS_ASYNC_REQUEST
    }
}

export const fetchCoupons = (couponsJSON: Types.IFetchCoupons) => {
    return {
        type: COUPONS_FETCHED,
        couponsJSON
    }
}

export const updateTotalPrice = (totalPrice: number) => {
    return {
        type: TOTAL_PRICE,
        totalPrice
    }
}

export const getWishListItem = (items: Types.IFetchProducts[]) => {
    return {
        type: GET_WISHLIST_ITEMS,
        items
    }
}
