import { Dispatch } from 'redux';
import { 
    PRODUCTS_FETCHED, 
    PRODUCTS_ERROR,
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

export const fetchProducts = () => {
    return async (dispatch: Dispatch) => {
        const response = await fetch('http://localhost:4000/products');
        const responseData = await response.json();
        responseData.map((item: IFetchProducts) => {
            item.count = 1,
            item.isChecked = false,
            item.isInWishList = false
        });
        
        try {
            dispatch({
                type: PRODUCTS_FETCHED,
                productsJSON: responseData
            });
        } catch(err) {
            dispatch({
                type: PRODUCTS_ERROR,
                productsJSON: err
            });
        }
    }
}

interface IFetchCoupons {
    type: string,
    title: string,
    discountRate?: number,
    discountAmount?: number
}

export const fetchCoupons = () => {
    return async (dispatch: Dispatch) => {
        const response = await fetch('http://localhost:4000/coupons');
        const responseData: IFetchCoupons[] = await response.json();

        try {
            dispatch({
                type: COUPONS_FETCHED,
                couponsJSON: responseData
            });
        } catch(err) {
            dispatch({
                type: COUPONS_ERROR,
                couponsJSON: err
            });
        }
    }
}