import { Dispatch } from 'redux';
import {
    PRODUCTS_REQUEST,
    PRODUCTS_FETCHED, 
    PRODUCTS_ERROR,
    COUPONS_REQUEST,
    COUPONS_FETCHED,
    COUPONS_ERROR
} from './ActionTypes';

interface IFetchProducts {
    id: string,
    title: string,
    coverImage: string,
    price: number,
    score: number,
    count: number,
    isChecked: boolean,
    isInWishList: boolean,
    availableCoupon?: boolean
}

export const requestProducts = () => {
    return {
        type: PRODUCTS_REQUEST
    }
}

export const fetchProducts = (productsJSON: any) => {
    return {
        type: PRODUCTS_FETCHED,
        productsJSON
    }
}

// export const fetchProducts = () => {
//     return async (dispatch: Dispatch) => {
//         const response = await fetch('http://localhost:4000/products');
//         const responseData = await response.json();
//         responseData.map((item: IFetchProducts) => {
//             item.count = 1,
//             item.isChecked = false,
//             item.isInWishList = false
//         });
        
//         try {
//             dispatch({
//                 type: PRODUCTS_FETCHED,
//                 productsJSON: responseData
//             });
//         } catch(err) {
//             dispatch({
//                 type: PRODUCTS_ERROR,
//                 productsJSON: err
//             });
//         }
//     }
// }

interface IFetchCoupons {
    type: string,
    title: string,
    discountRate?: number,
    discountAmount?: number
}

export const requestCoupons = () => {
    return {
        type: COUPONS_REQUEST
    }
}

export const fetchCoupons = (couponsJSON: any) => {
    return {
        type: COUPONS_FETCHED,
        couponsJSON
    }
}